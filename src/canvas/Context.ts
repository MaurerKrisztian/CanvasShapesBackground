import {Setup} from "../setup";

export class Context {
    static ctx: any;

    constructor() {
    }

    static getContext(elementId: string = "myCanvas"): HTMLCanvasElement {
        const index: any = document.getElementById(elementId);
        index.width = window.innerWidth;
        index.height = window.innerHeight;

        const ctx =  index.getContext('2d')

        if (!ctx) {
            throw new Error("Cannot get context");
        }

        if (Setup.CONFIG.BACKGROUND_COLOR != 'none'){
            index.style = `background: ${Setup.CONFIG.BACKGROUND_COLOR};`
        }

        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, innerWidth, innerHeight);

        this.ctx = ctx;
        return ctx;
    }
}
