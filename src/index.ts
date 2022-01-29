import { Image, CanvasRenderingContext2D, loadImage} from 'canvas';

export const bg = async (img: Image, ctx: CanvasRenderingContext2D, x: number, y: number) => {
  if (!img) throw new Error('Image has not been provided!!');
  if (!ctx) throw new Error('Ctx has not been provided!!');

  const bgImg = await loadImage(img);
  ctx.drawImage(bgImg, x, y);
};
