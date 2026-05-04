import { useBlockProps } from "@wordpress/block-editor";
export default function Save( { attributes, setAttributes } ) {

    const { width, color } = attributes;

    const separatorStyle = {
        width: width + '%',
        backgroundColor: color,
    };

    const blockProps = useBlockProps( {
        className: 'wp-block-telex-text-bubble',
        style: separatorStyle,
    } );

    return (<>
        <div {...blockProps}></div>
    </>
        
    )
}