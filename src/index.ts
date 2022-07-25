import { Context } from "./canvas/Context";
import { ModelFactory } from "./ModelFactory";
import { EntityRepository } from "./EntityRepository";
import { Animator } from "./canvas/Animator";
import {Setup, IConfig} from "./setup";

function createShapeCanvas(htmlCanvasId: string = "myCanvas", config: Partial<IConfig> = Setup.CONFIG){
    Setup.CONFIG = Object.assign(Setup.CONFIG, config);

    EntityRepository.allModels = []
    Context.getContext(htmlCanvasId)
    for (let i = 0; i < config.MODEL_NUMBERS; i++) {
        EntityRepository.allModels[i] = ModelFactory.create("random");
    }

    Animator.animate()
}

(window as any).createShapeCanvas = createShapeCanvas


