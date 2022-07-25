import {IModel} from "./interfaces/IModel";
import {DEFAULT_LINE_WIDTH, Setup} from "../setup";
import {Utils} from "../Utils";


export class CircleModel implements IModel {
    static MODEL_NAME = 'Circle'

    color: string;

    constructor(private x: any, private y: any, private dx: any, private dy: any, private radius: any, private lineWidth: number = Setup.CONFIG.LINE_WIDTH) {
        this.color = Utils.pickRandomFromArray<string>(Setup.CONFIG.COLORS)
    }

    draw(context: any) {
        context.lineWidth = this.lineWidth;
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context.strokeStyle = this.color;
        context.stroke();
        context.lineWidth = DEFAULT_LINE_WIDTH;
    }


    update(context: any) {
        if (this.x > innerWidth - this.radius || this.x < 0 + this.radius) {
            this.dx = -this.dx;
        }
        if (this.y > innerHeight - this.radius || this.y < 0 + this.radius) {
            this.dy = -this.dy;
        }

        this.x = this.x + this.dx;
        this.y = this.y + this.dy;

        this.draw(context);

    }
}
