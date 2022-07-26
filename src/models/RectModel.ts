import {IModel} from "./interfaces/IModel";
import {DEFAULT_LINE_WIDTH, Setup} from "../setup";
import {Utils} from "../Utils";
import {Context} from "../canvas/Context";

export class RectModel implements IModel {
    static MODEL_NAME = 'Rect'

    color: string;

    constructor(private x: any, private y: any, private dx: any, private dy: any, private width: number, private height: number, private lineWidth = Setup.CONFIG.lineWidth) {
        this.color = Utils.pickRandomFromArray<string>(Setup.CONFIG.colors)
    }

    draw(context: any) {
        context.beginPath();
        context.lineWidth = this.lineWidth;
        context.rect(this.x, this.y, this.width, this.height);
        context.strokeStyle = this.color;
        context.stroke();
        context.lineWidth = DEFAULT_LINE_WIDTH;
    }


    update(context: any) {
        if (this.x > Context.canvasWidth - this.width || this.x < 0) {
            this.dx = -this.dx;
        }
        if (this.y > Context.canvasHeight - this.height || this.y < 0) {
            this.dy = -this.dy;
        }

        this.x = this.x + this.dx;
        this.y = this.y + this.dy;

        this.draw(context);
    }
}
