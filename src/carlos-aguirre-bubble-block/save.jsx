import { RichText, useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { content, borderRadius, fontSize, backgroundColor, textColor } = attributes;

	const bubbleStyle = {
		borderRadius: borderRadius + 'px',
		fontSize: fontSize + 'px',
		backgroundColor,
		color: textColor,
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
