/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hooks and components used to mark the block wrapper element and edit rich text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	RichText,
	useBlockProps,
	InspectorControls,
} from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components';

/**
 * Font Awesome icons.
 */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faDesktop,
	faShieldAlt,
	faStar,
	faCode,
	faPalette,
	faRocket,
	faCog,
	faHeart,
	faLightbulb,
	faUsers,
} from '@fortawesome/free-solid-svg-icons';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * Icon options for the block.
 */
const ICON_OPTIONS = {
	faDesktop: { icon: faDesktop, label: 'Desktop' },
	faShieldAlt: { icon: faShieldAlt, label: 'Shield' },
	faStar: { icon: faStar, label: 'Star' },
	faCode: { icon: faCode, label: 'Code' },
	faPalette: { icon: faPalette, label: 'Palette' },
	faRocket: { icon: faRocket, label: 'Rocket' },
	faCog: { icon: faCog, label: 'Cog' },
	faHeart: { icon: faHeart, label: 'Heart' },
	faLightbulb: { icon: faLightbulb, label: 'Lightbulb' },
	faUsers: { icon: faUsers, label: 'Users' },
};

const options = Object.keys( ICON_OPTIONS ).map( ( key ) => ( {
	label: ICON_OPTIONS[ key ].label,
	value: key,
} ) );

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @param {Object}   root0
 * @param {Object}   root0.attributes
 * @param {Function} root0.setAttributes
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const { title, content, icon } = attributes;
	const blockProps = useBlockProps( { className: 'cap-card' } );

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Icono', 'carlos-aguirre-blocks' ) }>
					<SelectControl
						label={ __(
							'Selecciona un icono',
							'carlos-aguirre-blocks'
						) }
						value={ icon }
						options={ options }
						onChange={ ( newIcon ) =>
							setAttributes( { icon: newIcon } )
						}
					/>
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				<div className="cap-card__icon">
					<FontAwesomeIcon
						icon={ ICON_OPTIONS[ icon ].icon }
						className="cap-card__svg"
					/>
				</div>
				<RichText
					tagName="h3"
					className="cap-card__title"
					value={ title }
					onChange={ ( newTitle ) =>
						setAttributes( { title: newTitle } )
					}
					placeholder={ __(
						'Diseño UI/UX',
						'carlos-aguirre-blocks'
					) }
				/>
				<RichText
					tagName="p"
					className="cap-card__text"
					value={ content }
					onChange={ ( newContent ) =>
						setAttributes( { content: newContent } )
					}
					placeholder={ __(
						'Interfaces intuitivas centradas en el usuario…',
						'carlos-aguirre-blocks'
					) }
				/>
			</div>
		</>
	);
}
