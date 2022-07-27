export interface IModel {
    draw(ctx: CanvasRenderingContext2D): any;
    update(ctx: CanvasRenderingContext2D): any;
}