import {IModel} from "./interfaces/IModel";
import {DEFAULT_LINE_WIDTH, Setup} from "../setup";
import {Utils} from "../Utils";
import {Context} from "../canvas/Context";


export class TriangleModel implements IModel {
    static MODEL_NAME = 'Triangle'

    color: string;

    constructor(private x: number, private y: number, private dx: number, private dy: number, private sideLength: number, private lineWidth = Setup.CONFIG.lineWidth) {
        this.color = Utils.pickRandomFromArray<string>(Setup.CONFIG.colors)
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.lineWidth = this.lineWidth;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.sideLength, this.y - this.sideLength);
        ctx.lineTo(this.x + this.sideLength * 2, this.y);
        ctx.lineTo(this.x, this.y);
        ctx.stroke();
        ctx.lineWidth = DEFAULT_LINE_WIDTH;
    }


    update(context: CanvasRenderingContext2D) {
        if (this.x > Context.canvasWidth - this.sideLength * 2 || this.x < 0) {
            this.dx = -this.dx;
        }
        if (this.y > Context.canvasHeight - this.sideLength / 2 || this.y < this.sideLength) {
            this.dy = -this.dy;
        }

        this.x = this.x + this.dx;
        this.y = this.y + this.dy;

        this.draw(context);
    }
}
