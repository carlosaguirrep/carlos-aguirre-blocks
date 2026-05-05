
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl, TextControl } from '@wordpress/components';

export default function Edit({attributes, setAttributes}) {

    const {number,label} = attributes;

    const blockProps = useBlockProps({
        className: "capblocks-circle-spinner"
    })

    return (
        <>
        <InspectorControls>
            <PanelBody title="Settings">
                <RangeControl __nextHasNoMarginBottom
						__next40pxDefaultSize label="Counter" value={number} min={0} max={100}  onChange={ ( value ) => setAttributes( {number:value} ) }/>
                <TextControl value={label} onChange={(value) => setAttributes({label:value})}></TextControl>
            </PanelBody>
        </InspectorControls>
        
        <div {...useBlockProps()}>
            <div class="capblocks-circle-spinner__score-circle">
                <div class="capblocks-circle-spinner__spinner"></div>

                <div class="capblocks-circle-spinner__content">
                    <span class="capblocks-circle-spinner__number">{number}</span>
                    <span class="capblocks-circle-spinner__label">{label}</span>
                </div>
            </div>

        </div>
    
        </>
    );
}
