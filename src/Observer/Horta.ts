import { Observer, PrecosHorta } from "./Observer";
import { Subject } from "./Subject";

export class Horta implements Subject {

    private fregueses: Observer[];
    private hortaPrices: PrecosHorta;


    constructor() {
        this.fregueses = [];

        this.hortaPrices = { // Initialize hortaPrices with initial values
            tomato: 0,
            carrot: 0,
            lettuce: 0,
            brocolli: 0
        };
        console.log(this.hortaPrices);
    }


    public subscribe(obs: Observer): void {
        this.fregueses.push(obs);
    }
    public unsubscribe(obs: Observer): void {
        const indexObs = this.fregueses.indexOf(obs);

        this.fregueses.splice(indexObs, 1);
    }
    public notify(): void {
        for (const freguez of this.fregueses) {
            freguez.update(this.hortaPrices);
        }
    }

    public SetTomatoPrice(tomatoPrice: number) {
        this.hortaPrices.tomato = tomatoPrice;

        this.notify();
    }
    public SetCarrotPrice(carrotPrice: number) {
        this.hortaPrices.carrot = carrotPrice;

        this.notify();
    }
    public SetLettucePrice(lettucePrice: number) {
        this.hortaPrices.lettuce = lettucePrice;

        this.notify();
    }
    public SetBrocolliPrice(brocolliPrice: number) {
        this.hortaPrices.brocolli = brocolliPrice;

        this.notify();
    }

}