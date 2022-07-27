import {Setup} from "../setup";

export class Context {
    static ctx: CanvasRenderingContext2D;

    static canvasWidth: number;
    static canvasHeight: number;

    constructor() {
    }

    static getContext(elementId: string = "myCanvas"): CanvasRenderingContext2D {
        const canvasElement: HTMLCanvasElement = document.getElementById(elementId) as HTMLCanvasElement;


        if (Setup.CONFIG.isFullScreen) {
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

        if (Setup.CONFIG.backgroundColor != 'none') {
            (canvasElement as any).style = `background: ${Setup.CONFIG.backgroundColor};`
        }

        this.ctx = ctx;
        return ctx;
    }
}
