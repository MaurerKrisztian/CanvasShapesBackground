import {CircleModel} from "./models/CircleModel";
import {RectModel} from "./models/RectModel";
import {TriangleModel} from "./models/TriangleModel";
import {IModel} from "./models/interfaces/IModel";
import {Utils} from "./Utils";
import {Setup} from "./setup";

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
        const speed = Utils.generateRandom(Setup.CONFIG.MIN_SPEED, Setup.CONFIG.MAX_SPEED)
        switch (Utils.pickRandomFromArray(Setup.CONFIG.ENABLED_MODELS)) {
            case CircleModel.MODEL_NAME:
                return this.createRandomCircle(speed)
                break;
            case TriangleModel.MODEL_NAME:
                return this.createRandomTriangle(speed)
                break;
            case RectModel.MODEL_NAME:
                return this.createRandomRect(speed)
                break;
        }
    }


    private static createRandomCircle(maxSpeed: number) {
        const radius = Utils.generateRandom(10, 30) * Setup.CONFIG.SIZE_MULTIPLAYER
        const circleStart = Setup.CONFIG.START_POSITION == 'random' ? this.generateStartPositionRadiusBased(Math.random() * window.innerWidth, Math.random() * window.innerHeight, radius): Utils.middlePosition()

        const dx = (Math.random() - 0.5) * maxSpeed;
        const dy = (Math.random() - 0.5) * maxSpeed;

        return new CircleModel(circleStart.x, circleStart.y, dx, dy, radius)
    }

    private static createRandomTriangle(maxSpeed: number) {
        const sideLength = 33;

        const dx = (Math.random() - 0.5) * maxSpeed;
        const dy = (Math.random() - 0.5) * maxSpeed;

        const rectRadius: number = sideLength * Setup.CONFIG.SIZE_MULTIPLAYER;
        const rectStart = Setup.CONFIG.START_POSITION == 'random' ? this.generateStartPositionRadiusBased(Math.random() * window.innerWidth, Math.random() * window.innerHeight, rectRadius): Utils.middlePosition()
        return new TriangleModel(rectStart.x, rectStart.y, dx, dy, sideLength,  Setup.CONFIG.LINE_WIDTH);
    }

    private static createRandomRect(maxSpeed: number) {
        const width = Utils.generateRandom(11, 100) * Setup.CONFIG.SIZE_MULTIPLAYER;
        const height = Utils.generateRandom(11, 100) * Setup.CONFIG.SIZE_MULTIPLAYER;

        const dx = (Math.random() - 0.5) * maxSpeed;
        const dy = (Math.random() - 0.5) * maxSpeed;

        const rectRadius: number = height < width ? width : height;
        const rectStart = Setup.CONFIG.START_POSITION == 'random' ? this.generateStartPositionRadiusBased(Math.random() * window.innerWidth, Math.random() * window.innerHeight, rectRadius * 2) : Utils.middlePosition()
        return new RectModel(rectStart.x, rectStart.y, dx, dy, width  * Setup.CONFIG.SIZE_MULTIPLAYER, height);
    }

    static generateStartPositionRadiusBased(x: number, y: number, radius: number) {
        //if the circuit not fully in the browser
        if (x < 0 + radius) {
            x = 0 + radius;
        } else if (x > innerWidth - radius) {
            x = innerWidth - radius;
        }

        if (y < 0 + radius) {
            y = 0 + radius;
        } else if (y > innerHeight - radius) {
            y = innerHeight - radius;
        }
        return {x, y}
    }

}

