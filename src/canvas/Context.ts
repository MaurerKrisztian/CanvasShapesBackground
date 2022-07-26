import {Setup} from "../setup";

export class Context {
    static ctx: any;

    static canvasWidth: number;
    static canvasHeight: number;

    constructor() {
    }

    static getContext(elementId: string = "myCanvas"): HTMLCanvasElement {
        const canvasElement: any = document.getElementById(elementId);


        if (Setup.CONFIG.IS_FULL_SCREEN) {
            canvasElement.width = window.innerWidth;
            canvasElement.height = window.innerHeight;
            this.canvasWidth = innerWidth
            this.canvasHeight = innerHeight

            window.addEventListener("resize", () => {
                this.canvasWidth = innerWidth
                this.canvasHeight = innerHeight
                canvasElement.width = window.innerWidth;
                canvasElement.height = window.innerHeight;
            });
        }else {
            this.canvasWidth = canvasElement.width
            this.canvasHeight = canvasElement.height
            canvasElement.addEventListener("resize", () => {
                this.canvasWidth = canvasElement.width
                this.canvasHeight = canvasElement.height
            });
        }

        console.log("width", this.canvasWidth, "height", this.canvasHeight)

        const ctx = canvasElement.getContext('2d')

        if (!ctx) {
            throw new Error("Cannot get context");
        }

        if (Setup.CONFIG.BACKGROUND_COLOR != 'none') {
            canvasElement.style = `background: ${Setup.CONFIG.BACKGROUND_COLOR};`
        }

        this.ctx = ctx;
        return ctx;
    }
}
