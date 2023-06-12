import { Observer } from "./Observer";

export interface Subject {
    subscribe(obs: Observer): void;
    unsubscribe(obs: Observer): void;
    notify(): void;
}