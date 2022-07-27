import { EntityRepository } from "../EntityRepository";
import { Context } from "./Context";
import {Setup} from "../setup";

export class Animator {
    static requestFrameId: number

    static animate() {
        Animator.requestFrameId = requestAnimationFrame(Animator.animate); //infinite loop

        Context.ctx.canvas.width  = Context.canvasWidth;
        Context.ctx.canvas.height = Context.canvasHeight

        Context.ctx.clearRect(0, 0, Context.canvasWidth, Context.canvasHeight);

        for (var i = 0; i < EntityRepository.allModels.length; i++) {
            EntityRepository.allModels[i].update(Context.ctx);
        }

    }

    static cancelAnimation() {
        if (Animator.requestFrameId){
            cancelAnimationFrame(Animator.requestFrameId);
        }
    }
}
