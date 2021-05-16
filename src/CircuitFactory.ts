import { Circle } from "./models/Circuit";

export class CircuitFactory {

    static create(type: string | "random", speed = 10): Circle {
        switch (type) {
            case "random":
                return this.createRandomCircuit(speed)
                break
            default:
                throw new Error(`Can't create circuit: ${type}`)
        }
    }


    private static createRandomCircuit(maxSpeed: number) {
        let x: number = Math.random() * window.innerWidth;
        let y: number = Math.random() * window.innerHeight;
        const radius: number = 30;

        //start random direction and speed
        const dx = (Math.random() - 0.5) * maxSpeed;
        const dy = (Math.random() - 0.5) * maxSpeed;

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

        return new Circle(x, y, dx, dy, radius)
    }
}
