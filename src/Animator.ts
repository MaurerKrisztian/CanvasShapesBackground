import { EntityRepository } from "./EntityRepository";
import { Context } from "./Context";

export class Animator {
    constructor() {
    }

    static animate() {
        requestAnimationFrame(Animator.animate); //infinite loop

        Context.ctx.clearRect(0, 0, innerWidth, innerHeight);

        for (var i = 0; i < EntityRepository.allCircuit.length; i++) {
            EntityRepository.allCircuit[i].update(Context.ctx);
        }


    }
}
