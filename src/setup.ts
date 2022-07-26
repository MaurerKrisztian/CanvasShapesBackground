export const DEFAULT_LINE_WIDTH = 2

export class Setup {

    static CONFIG: IConfig = {
        modelNumbers: 11,
        colors: ['blue', 'red', 'green', 'yellow'],
        backgroundColor: 'none',
        enabledModels: ['Triangle', 'Circle', 'Rect'],
        minSpeed: 4,
        maxSpeed: 11,
        lineWidth: 3,
        sizeMultiplier: 2,
        startPosition: 'random',
        isFullScreen: true,
    }
}

export interface IConfig {
    startPosition: 'middle' | 'random'
    enabledModels: ('Triangle' | 'Circle' | 'Rect')[],
    colors: string[]
    backgroundColor: 'none' | string,
    minSpeed: number,
    maxSpeed: number,
    lineWidth: number,
    modelNumbers: number,
    sizeMultiplier: number,
    isFullScreen: boolean,
}