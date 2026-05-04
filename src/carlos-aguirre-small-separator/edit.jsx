import { useBlockProps, InspectorControls, PanelColorSettings, __experimentalUseColorProps as useColorProps } from "@wordpress/block-editor";
import { PanelBody, RangeControl, ColorPalette,ColorIndicator } from "@wordpress/components";
import { __experimentalUnitControl as UnitControl } from '@wordpress/components';

export default function Edit( { attributes, setAttributes } ) {

    const { width, color, height } = attributes;

    const colorProps = useColorProps({
        backgroundColor: color,
    });

	const blockProps = useBlockProps( {
		className: 'wp-block-telex-text-bubble',
		style: {
            width: width ? width + '%' : undefined,
            height: height,
            backgroundColor: color,
        },
	} );
    

    return (<>
    <InspectorControls> 
         <PanelColorSettings
                title="Colores"
                colorSettings={[
                    {
                        value: color,
                        onChange: (value) => setAttributes({ color: value }),
                        label: 'Background color',
                    },
                ]}
            />
            <PanelBody title="Separator Settings">
                <RangeControl
                    label="Width"
                    value={width}
                    onChange={(value) => setAttributes({ width: value })}
                    min={0}
                    max={100}
                />
               
                <UnitControl
                    label="Height"
                    value={ height }
                    onChange={ (value) => setAttributes({ height: value }) }
                />

            </PanelBody>
        </InspectorControls>
        <div {...blockProps}></div> 
    </>
        
    )
}