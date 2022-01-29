import { Image, CanvasRenderingContext2D, Canvas } from "canvas";

export const bg = async(img: Image, canvas: Canvas, ctx: CanvasRenderingContext2D, x: number, y: number) => {
    if(!img) throw new Error("Image has not been provided!!");
    if(!canvas) throw new Error("Canvas has not been provided!!");

    const bgImg = await canvas.loadImage(img);
    ctx.drawImage(bgImg, x, y);
}
