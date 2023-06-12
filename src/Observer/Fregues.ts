import { Observer, PrecosHorta } from "./Observer";

export class Fregues implements Observer {

    private pricesCatalogue : PrecosHorta;
    private id: number;

    constructor(id: number) {
        this.id = id;
        this.pricesCatalogue = { // Initialize hortaPrices with initial values
            tomato: 0,
            carrot: 0,
            lettuce: 0,
            brocolli: 0
        };
    }

    public update({ tomato, carrot, lettuce, brocolli }: PrecosHorta): void {
        this.pricesCatalogue.tomato = tomato;
        this.pricesCatalogue.carrot = carrot;
        this.pricesCatalogue.lettuce = lettuce;
        this.pricesCatalogue.brocolli = brocolli;

        this.studyingPrices();
    }

    public studyingPrices() {
        console.log('----- Checking the prices -----');
        console.log('Who is looking at the prices? Client ', this.id);
        console.log('Tomato: R$', this.pricesCatalogue.tomato);
        console.log('Carrot: R$', this.pricesCatalogue.carrot);
        console.log('Lettuce: R$', this.pricesCatalogue.lettuce);
        console.log('Brocolli: R$', this.pricesCatalogue.brocolli);
    }
    
}