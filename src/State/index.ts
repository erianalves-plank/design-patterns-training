import { Walkman } from "./States";

export function TestingState() {
    const walkman = new Walkman();

    walkman.Open();
    walkman.Playing();
    walkman.Closed();
    walkman.Playing();
    walkman.Open();
}