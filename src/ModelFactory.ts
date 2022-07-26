import {CircleModel} from "./models/CircleModel";
import {RectModel} from "./models/RectModel";
import {TriangleModel} from "./models/TriangleModel";
import {IModel} from "./models/interfaces/IModel";
import {Utils} from "./Utils";
import {Setup} from "./setup";
import {Context} from "./canvas/Context";

export class ModelFactory {

    static create(type: string | "random"): IModel {
        switch (type) {
            case "random":
                return this.createRandomModel()
                break
            default:
                throw new Error(`Can't create circuit: ${type}`)
        }
    }

    private static createRandomModel() {
        const speed = Utils.generateRandom(Setup.CONFIG.minSpeed, Setup.CONFIG.maxSpeed)
        const randoModelName = Utils.pickRandomFromArray(Setup.CONFIG.enabledModels)
        switch (randoModelName) {
            case CircleModel.MODEL_NAME:
                return this.createRandomCircle(speed)
                break;
            case TriangleModel.MODEL_NAME:
                return this.createRandomTriangle(speed)
                break;
            case RectModel.MODEL_NAME:
                return this.createRandomRect(speed)
                break;
            default:
                throw new Error(`Model not found with name: ${randoModelName}`)
        }
    }


    private static createRandomCircle(maxSpeed: number) {
        const radius = Utils.generateRandom(10, 30) * Setup.CONFIG.sizeMultiplier
        const circleStart = Setup.CONFIG.startPosition == 'random' ? this.generateStartPositionRadiusBased(Math.random() * Context.canvasWidth, Math.random() * Context.canvasHeight, radius): Utils.middlePosition()

        const dx = (Math.random() - 0.5) * maxSpeed;
        const dy = (Math.random() - 0.5) * maxSpeed;

        return new CircleModel(circleStart.x, circleStart.y, dx, dy, radius)
    }

    private static createRandomTriangle(maxSpeed: number) {
        const sideLength = 33;

        const dx = (Math.random() - 0.5) * maxSpeed;
        const dy = (Math.random() - 0.5) * maxSpeed;

        const rectRadius: number = sideLength * Setup.CONFIG.sizeMultiplier;
        const rectStart = Setup.CONFIG.startPosition == 'random' ? this.generateStartPositionRadiusBased(Math.random() * Context.canvasWidth, Math.random() * Context.canvasHeight, rectRadius): Utils.middlePosition()
        return new TriangleModel(rectStart.x, rectStart.y, dx, dy, sideLength,  Setup.CONFIG.lineWidth);
    }

    private static createRandomRect(maxSpeed: number) {
        const width = Utils.generateRandom(11, 100) * Setup.CONFIG.sizeMultiplier;
        const height = Utils.generateRandom(11, 100) * Setup.CONFIG.sizeMultiplier;

        const dx = (Math.random() - 0.5) * maxSpeed;
        const dy = (Math.random() - 0.5) * maxSpeed;

        const rectRadius: number = height < width ? width : height;
        const rectStart = Setup.CONFIG.startPosition == 'random' ? this.generateStartPositionRadiusBased(Math.random() * Context.canvasWidth, Math.random() * Context.canvasHeight, rectRadius * 2) : Utils.middlePosition()
        return new RectModel(rectStart.x, rectStart.y, dx, dy, width  * Setup.CONFIG.sizeMultiplier, height);
    }

    static generateStartPositionRadiusBased(x: number, y: number, radius: number) {
        if (x < 0 + radius) {
            x = 0 + radius;
        } else if (x > Context.canvasWidth - radius) {
            x = Context.canvasWidth - radius;
        }

        if (y < 0 + radius) {
            y = 0 + radius;
        } else if (y > Context.canvasHeight - radius) {
            y = Context.canvasHeight - radius;
        }
        return {x, y}
    }

}

