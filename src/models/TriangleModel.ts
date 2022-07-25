import {IModel} from "./interfaces/IModel";
import {DEFAULT_LINE_WIDTH, Setup} from "../setup";
import {Utils} from "../Utils";


export class TriangleModel implements IModel {
    static MODEL_NAME = 'Triangle'

    color: string;

    constructor(private x: number, private y: number, private dx: any, private dy: any, private sideLength: number, private lineWidth = Setup.CONFIG.LINE_WIDTH) {
        this.color = Utils.pickRandomFromArray<string>(Setup.CONFIG.COLORS)
    }

    draw(ctx: any) {
        ctx.lineWidth = this.lineWidth;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.sideLength, this.y - this.sideLength);
        ctx.lineTo(this.x + this.sideLength * 2, this.y);
        ctx.lineTo(this.x, this.y);
        ctx.stroke();
        ctx.lineWidth = DEFAULT_LINE_WIDTH;
    }


    update(context: any) {
        if (this.x > innerWidth - this.sideLength || this.x < 0) {
            this.dx = -this.dx;
        }
        if (this.y > innerHeight - this.sideLength || this.y < 0) {
            this.dy = -this.dy;
        }

        this.x = this.x + this.dx;
        this.y = this.y + this.dy;

        this.draw(context);
    }
}