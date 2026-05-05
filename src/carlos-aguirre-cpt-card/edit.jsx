
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';

import {
	PanelBody,
	SelectControl,
	TextControl,
	Spinner,
	Placeholder,
} from '@wordpress/components';

import { useState, useEffect } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import { addQueryArgs } from '@wordpress/url';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @param {Object}   props               Block props.
 * @param {Object}   props.attributes    Block attributes.
 * @param {Function} props.setAttributes Function to set block attributes.
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const { postId, postType, subtitle, postTitle, postLink, imageUrl, imageAlt } = attributes;

	const [ postTypes, setPostTypes ] = useState( [] );
	const [ posts, setPosts ] = useState( [] );
	const [ searchTerm, setSearchTerm ] = useState( '' );
	const [ isLoadingTypes, setIsLoadingTypes ] = useState( true );
	const [ isLoadingPosts, setIsLoadingPosts ] = useState( false );

	// Fetch available post types.
	useEffect( () => {
		setIsLoadingTypes( true );
		apiFetch( { path: '/telex-featured-post-card/v1/post-types' } )
			.then( ( result ) => {
				setPostTypes( result );
				setIsLoadingTypes( false );
			} )
			.catch( () => {
				setIsLoadingTypes( false );
			} );
	}, [] );

	// Fetch posts when post type or search term changes.
	useEffect( () => {
		if ( ! postType ) {
			return;
		}

		setIsLoadingPosts( true );

		const queryArgs = {
			per_page: 20,
			status: 'publish',
			orderby: 'title',
			order: 'asc',
			_embed: 'wp:featuredmedia',
		};

		if ( searchTerm ) {
			queryArgs.search = searchTerm;
		}

		const path = addQueryArgs( `/wp/v2/${ getRestBase( postType ) }`, queryArgs );

		apiFetch( { path } )
			.then( ( result ) => {
				setPosts( result );
				setIsLoadingPosts( false );
			} )
			.catch( () => {
				setPosts( [] );
				setIsLoadingPosts( false );
			} );
	}, [ postType, searchTerm ] );

	/**
	 * Gets the REST base for a post type.
	 *
	 * @param {string} type The post type slug.
	 * @return {string} The REST base path.
	 */
	function getRestBase( type ) {
		const map = {
			post: 'posts',
			page: 'pages',
		};
		return map[ type ] || type;
	}

	/**
	 * Handles selection of a post from the list.
	 *
	 * @param {string} value The selected post ID as string.
	 */
	function onSelectPost( value ) {
		const selectedId = parseInt( value, 10 );

		if ( ! selectedId ) {
			setAttributes( {
				postId: 0,
				postTitle: '',
				postLink: '',
				imageUrl: '',
				imageAlt: '',
			} );
			return;
		}

		const selectedPost = posts.find( ( p ) => p.id === selectedId );

		if ( selectedPost ) {
			const featuredMedia = selectedPost._embedded?.[ 'wp:featuredmedia' ]?.[ 0 ];
			const imgUrl = featuredMedia?.media_details?.sizes?.large?.source_url
				|| featuredMedia?.source_url
				|| '';
			const imgAlt = featuredMedia?.alt_text || '';

			setAttributes( {
				postId: selectedId,
				postTitle: selectedPost.title?.rendered || '',
				postLink: selectedPost.link || '',
				imageUrl: imgUrl,
				imageAlt: imgAlt,
			} );
		}
	}

	const postTypeOptions = [
		{ label: __( '— Select a post type —', 'telex-featured-post-card' ), value: '' },
		...postTypes.map( ( pt ) => ( {
			label: pt.label,
			value: pt.slug,
		} ) ),
	];

	const postOptions = [
		{ label: __( '— Select a post —', 'telex-featured-post-card' ), value: '0' },
		...posts.map( ( p ) => ( {
			label: p.title?.rendered ? decodeEntities( p.title.rendered ) : __( '(No title)', 'telex-featured-post-card' ),
			value: String( p.id ),
		} ) ),
	];

	/**
	 * Decodes HTML entities in a string.
	 *
	 * @param {string} text The text to decode.
	 * @return {string} Decoded text.
	 */
	function decodeEntities( text ) {
		const doc = new DOMParser().parseFromString( text, 'text/html' );
		return doc.documentElement.textContent;
	}

	const blockProps = useBlockProps( {
		className: 'wp-block-capblocks-featured-post-card',
	} );

	const hasPost = postId > 0 && postTitle;

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Post Selection', 'telex-featured-post-card' ) } initialOpen={ true }>
					{ isLoadingTypes ? (
						<Spinner />
					) : (
						<SelectControl
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							label={ __( 'Post Type', 'telex-featured-post-card' ) }
							value={ postType }
							options={ postTypeOptions }
							onChange={ ( value ) => {
								setAttributes( {
									postType: value,
									postId: 0,
									postTitle: '',
									postLink: '',
									imageUrl: '',
									imageAlt: '',
								} );
								setSearchTerm( '' );
							} }
						/>
					) }

					{ postType && (
						<>
							<TextControl
								__nextHasNoMarginBottom
								__next40pxDefaultSize
								label={ __( 'Search by title', 'telex-featured-post-card' ) }
								value={ searchTerm }
								onChange={ ( value ) => setSearchTerm( value ) }
								placeholder={ __( 'Type to search…', 'telex-featured-post-card' ) }
							/>

							{ isLoadingPosts ? (
								<Spinner />
							) : (
								<SelectControl
									__nextHasNoMarginBottom
									__next40pxDefaultSize
									label={ __( 'Select Post', 'telex-featured-post-card' ) }
									value={ String( postId ) }
									options={ postOptions }
									onChange={ onSelectPost }
								/>
							) }
						</>
					) }
				</PanelBody>

				<PanelBody title={ __( 'Content', 'telex-featured-post-card' ) } initialOpen={ true }>
					<TextControl
						__nextHasNoMarginBottom
						__next40pxDefaultSize
						label={ __( 'Subtitle', 'telex-featured-post-card' ) }
						value={ subtitle }
						onChange={ ( value ) => setAttributes( { subtitle: value } ) }
						placeholder={ __( 'e.g. UI/UX & WEBAPP', 'telex-featured-post-card' ) }
					/>
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				{ ! hasPost ? (
					<Placeholder
						icon="format-image"
						label={ __( 'Featured Post Card', 'telex-featured-post-card' ) }
						instructions={ __( 'Select a post type and a post from the sidebar to display as a featured card.', 'telex-featured-post-card' ) }
					/>
				) : (
					<>
						<div className="wp-block-capblocks-featured-post-card__image-wrapper">
							{ imageUrl ? (
								<img
									src={ imageUrl }
									alt={ imageAlt }
									className="wp-block-capblocks-featured-post-card__image"
								/>
							) : (
								<div className="wp-block-capblocks-featured-post-card__image-placeholder">
									<span>{ __( 'No featured image', 'telex-featured-post-card' ) }</span>
								</div>
							) }
						</div>
						<div className="wp-block-capblocks-featured-post-card__content">
							<div className="wp-block-capblocks-featured-post-card__text">
								<h3 className="wp-block-capblocks-featured-post-card__title">
									{ decodeEntities( postTitle ) }
								</h3>
								{ subtitle && (
									<p className="wp-block-capblocks-featured-post-card__subtitle">
										{ subtitle }
									</p>
								) }
							</div>
							<span className="wp-block-capblocks-featured-post-card__arrow" aria-hidden="true">
								&#8594;
							</span>
						</div>
					</>
				) }
			</div>
		</>
	);
}
