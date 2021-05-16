export class Context {
    static ctx: any;

    constructor() {
    }

    static getContext(): HTMLCanvasElement {
        const index: any = document.getElementById("myCanvas");
        index.width = window.innerWidth;
        index.height = window.innerHeight;

        const ctx =  index.getContext('2d')

        if (!ctx) {
            throw new Error("Cannot get context");
        }

        this.ctx = ctx;
        return ctx;
    }
}
