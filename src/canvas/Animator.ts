import { EntityRepository } from "../EntityRepository";
import { Context } from "./Context";

export class Animator {
    static requestFrameId: any

    static animate() {
        Animator.requestFrameId = requestAnimationFrame(Animator.animate); //infinite loop

        Context.ctx.clearRect(0, 0, innerWidth, innerHeight);

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
