import { Strategy } from "./Strategy";

export class Counter {
    private taxationMethod: Strategy;

    constructor (defaultTaxMethod: Strategy) {
        this.taxationMethod = defaultTaxMethod;
    }

    public setTaxationMethod(taxMethod: Strategy){
        this.taxationMethod = taxMethod;
    }

    public computeTaxes(earnings: number) {
        this.taxationMethod.compute(earnings);
    }
}