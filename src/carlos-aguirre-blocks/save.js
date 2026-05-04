/**
 * React hooks and components used to mark the block wrapper element and save rich text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';

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

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @param {Object} root0
 * @param {Object} root0.attributes
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function Save( { attributes } ) {
	const { title, content, icon } = attributes;

		const blockProps = useBlockProps.save( {
			className: 'cap-card'
		} );

	return (
		<div { ...blockProps }>
			<div className="cap-card__icon">
				<FontAwesomeIcon
					icon={ ICON_OPTIONS[ icon ].icon }
					className="cap-card__svg"
				/>
			</div>
			<RichText.Content
				tagName="h3"
				className="cap-card__title"
				value={ title }
			/>
			<RichText.Content
				tagName="p"
				className="cap-card__text"
				value={ content }
			/>
		</div>
	);
}
