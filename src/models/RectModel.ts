import {IModel} from "./interfaces/IModel";
import {DEFAULT_LINE_WIDTH, Setup} from "../setup";
import {Utils} from "../Utils";

export class RectModel implements IModel {
    static MODEL_NAME = 'Rect'

    color: string;

    constructor(private x: any, private y: any, private dx: any, private dy: any, private width: number, private height: number, private lineWidth = Setup.CONFIG.LINE_WIDTH) {
        this.color = Utils.pickRandomFromArray<string>(Setup.CONFIG.COLORS)
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
        if (this.x > innerWidth - this.width || this.x < 0) {
            this.dx = -this.dx;
        }
        if (this.y > innerHeight - this.height || this.y < 0) {
            this.dy = -this.dy;
        }

        this.x = this.x + this.dx;
        this.y = this.y + this.dy;

        this.draw(context);
    }
}