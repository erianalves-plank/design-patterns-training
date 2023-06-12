/* 
    - One interface for the classes that  implments one specific way to perform a certain action in the given context
    - Classes for the strategies that implements the above
    - One class for the context, it has a reference for the strategy (interface)
*/

import { Counter } from "./Counter";
import { BasicTaxation, BigFortune } from "./Taxes";

export function TestingStrategy(){
    const counter = new Counter(new BasicTaxation());
    counter.computeTaxes(100);
    counter.setTaxationMethod(new BigFortune());
    counter.computeTaxes(9000);
}