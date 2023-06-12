import { Strategy } from "./Strategy";

export class BasicTaxation implements Strategy {
    compute(value: number): void {
        const tax = value * 0.04 - 20;
        console.log('The total amount of your taxes are R$', tax);
    }
    
}
export class MiddleClass implements Strategy {
    compute(value: number): void {
        const tax = value * 0.19 + (value/(new Date().getMonth())* 7);
        console.log('The total amount of your taxes are R$', tax);
    }
    
}
export class BigFortune implements Strategy {
    compute(value: number): void {
        const tax = value * 0.68 ;
        console.log('The total amount of your taxes are R$', tax);
    }
    
}