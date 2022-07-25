export class Utils {
    static generateRandom(min: number, max: number) {
        let difference = max - min;
        let rand = Math.random();
        rand = Math.floor(rand * difference);
        rand = rand + min;
        return rand;
    }

    static pickRandomFromArray<T = any>(arr: T[]): T{
        return arr[this.generateRandom(0, arr.length)]
    }

    static middlePosition(){
        return {x: innerWidth / 2, y: innerHeight / 2}
    }
}