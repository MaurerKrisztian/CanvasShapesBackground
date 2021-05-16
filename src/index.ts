import { Circle } from "./models/Circuit";
import { Context } from "./Context";
import { CircuitFactory } from "./CircuitFactory";
import { EntityRepository } from "./EntityRepository";
import { Animator } from "./Animator";

console.log(Context.getContext())


const circuitNumber: number =  Number.parseInt(prompt("Please enter the circuits number", "50")) || 11 ;

for (let i = 0; i < circuitNumber; i++) {
    EntityRepository.allCircuit[i] = CircuitFactory.create("random");
}

Animator.animate()




