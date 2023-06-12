import { Fregues } from "./Fregues";
import { Horta } from "./Horta";


export const TestingObserver = () => {
    const hortaDoSeuZe = new Horta();
    
    const donaMaria = new Fregues(1);
    const seuCarlos = new Fregues(2);
    
    hortaDoSeuZe.subscribe(donaMaria);
    hortaDoSeuZe.subscribe(seuCarlos);
    
    hortaDoSeuZe.SetBrocolliPrice(4.5);
    hortaDoSeuZe.unsubscribe(donaMaria);
    hortaDoSeuZe.SetLettucePrice(2.5);
}

/*
    Para implementar o Observer:
        - Uma interface para o subject 
        - classe concreta do subject, o qual vai conter uma lista de observers
        - interface para observer
        - classe concreta que implementa o observer
        -> There is a subtlety in the implmentaion in which the observers can have a reference to the observable, so the update method doesnt need parameters
*/
