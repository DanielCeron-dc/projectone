import React, { useMemo } from "react";


export type TextProps = {
    children: string;
    fontSize?: number;
    color?: string;
    position?: [number, number, number];
    scale?: [number, number, number];
};


const SpriteText: React.FC<TextProps> = ({ color = 'white', fontSize = 4.5, children, position, scale }) => {
    const canvas = useMemo(() => {
        var fontface = 'Arial'
        var borderThickness = 4

        var canvas = document.createElement('canvas')
        var context = canvas.getContext('2d')
        if (context) {
            context.textBaseline = 'bottom'
            context.font = `bold ${fontSize}px -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif`
            var metrics = context.measureText(children)
            console.log(metrics)
            var textWidth = metrics.width
            context.lineWidth = borderThickness
            context.fillStyle = color
            context.fillText(children, 0, 100, 300)
        }

        return canvas
    }, [children])

    return (
        <sprite scale={[4, 2, 10]} position={position}>
            <spriteMaterial sizeAttenuation={true} attach="material" >
                <canvasTexture attach="map" image={canvas} />
            </spriteMaterial>

        </sprite>
    )
}

export default SpriteText;