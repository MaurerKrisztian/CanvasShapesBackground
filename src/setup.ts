export const DEFAULT_LINE_WIDTH = 2

export class Setup {
   static CONFIG: IConfig = {
        MODEL_NUMBERS: 11,
        COLORS: ['blue', 'red', 'green', 'black', 'yellow'],
        BACKGROUND_COLOR: 'none',
        ENABLED_MODELS: ['Triangle', 'Circle', 'Rect'],
        MIN_SPEED: 11,
        MAX_SPEED: 11,
        LINE_WIDTH: 3,
        SIZE_MULTIPLAYER: 2,
        START_POSITION: 'random'
    }
}

export interface IConfig {
    START_POSITION: 'middle' | 'random'
    ENABLED_MODELS: ('Triangle'| 'Circle'| 'Rect')[],
    COLORS: string[]
    BACKGROUND_COLOR: 'none' | string,
    MIN_SPEED: number,
    MAX_SPEED: number,
    LINE_WIDTH: number,
    MODEL_NUMBERS: number,
    SIZE_MULTIPLAYER: number,
}