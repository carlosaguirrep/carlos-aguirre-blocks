import { RichText, useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { content, borderRadius, fontSize, backgroundColor, textColor, upperCase, letterSpacing } = attributes;

	const uppercase = upperCase?"uppercase":"null";

	const bubbleStyle = {
		borderRadius: borderRadius + 'px',
		fontSize: fontSize + 'px',
		backgroundColor,
		color: textColor,
		textTransform: uppercase,
		letterSpacing: letterSpacing
	};

	const blockProps = useBlockProps.save( {
		className: 'wp-block-telex-text-bubble',
		style: bubbleStyle,
	} );

	return (
		<div { ...blockProps }>
			<RichText.Content
				tagName="p"
				value={ content }
			/>
		</div>
	);
}
