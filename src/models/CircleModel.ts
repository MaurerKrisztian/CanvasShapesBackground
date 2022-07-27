import {IModel} from "./interfaces/IModel";
import {DEFAULT_LINE_WIDTH, Setup} from "../setup";
import {Utils} from "../Utils";
import {Context} from "../canvas/Context";


export class CircleModel implements IModel {
    static MODEL_NAME = 'Circle'

    color: string;

    constructor(private x: number, private y: number, private dx: number, private dy: number, private radius: number, private lineWidth: number = Setup.CONFIG.lineWidth) {
        this.color = Utils.pickRandomFromArray<string>(Setup.CONFIG.colors)
    }

    draw(context: CanvasRenderingContext2D) {
        context.lineWidth = this.lineWidth;
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context.strokeStyle = this.color;
        context.stroke();
        context.lineWidth = DEFAULT_LINE_WIDTH;
    }


    update(context: CanvasRenderingContext2D) {
        if (this.x > Context.canvasWidth - this.radius || this.x < 0 + this.radius) {
            this.dx = -this.dx;
        }
        if (this.y > Context.canvasHeight - this.radius || this.y < 0 + this.radius) {
            this.dy = -this.dy;
        }

        this.x = this.x + this.dx;
        this.y = this.y + this.dy;

        this.draw(context);
    }
}
