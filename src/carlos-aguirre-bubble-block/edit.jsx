
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
import { useBlockProps, InspectorControls, RichText } from '@wordpress/block-editor';
import {
	PanelBody,
	RangeControl,
	ColorPalette,
} from '@wordpress/components';

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
 * @param {Function} props.setAttributes Function to update attributes.
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const { content, borderRadius, fontSize, backgroundColor, textColor } = attributes;

	const bubbleStyle = {
		borderRadius: borderRadius + 'px',
		fontSize: fontSize + 'px',
		backgroundColor,
		color: textColor,
	};

	const blockProps = useBlockProps( {
		className: 'wp-block-telex-text-bubble',
		style: bubbleStyle,
	} );

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Bubble Settings', 'telex-text-bubble' ) } initialOpen={ true }>
					<RangeControl
						__nextHasNoMarginBottom
						__next40pxDefaultSize
						label={ __( 'Border Radius', 'telex-text-bubble' ) }
						value={ borderRadius }
						onChange={ ( value ) => setAttributes( { borderRadius: value } ) }
						min={ 0 }
						max={ 100 }
					/>
					<RangeControl
						__nextHasNoMarginBottom
						__next40pxDefaultSize
						label={ __( 'Font Size', 'telex-text-bubble' ) }
						value={ fontSize }
						onChange={ ( value ) => setAttributes( { fontSize: value } ) }
						min={ 10 }
						max={ 72 }
					/>
				</PanelBody>
				<PanelBody title={ __( 'Background Color', 'telex-text-bubble' ) } initialOpen={ false }>
					<ColorPalette
						value={ backgroundColor }
						onChange={ ( value ) => setAttributes( { backgroundColor: value } ) }
						clearable={ true }
					/>
				</PanelBody>
				<PanelBody title={ __( 'Text Color', 'telex-text-bubble' ) } initialOpen={ false }>
					<ColorPalette
						value={ textColor }
						onChange={ ( value ) => setAttributes( { textColor: value } ) }
						clearable={ true }
					/>
				</PanelBody>
			</InspectorControls>
			<div { ...blockProps }>
				<RichText
					tagName="p"
					value={ content }
					onChange={ ( value ) => setAttributes( { content: value } ) }
					placeholder={ __( 'Write your bubble text…', 'telex-text-bubble' ) }
					allowedFormats={ [ 'core/bold', 'core/italic' ] }
				/>
			</div>
		</>
	);
}
