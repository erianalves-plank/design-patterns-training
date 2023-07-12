import { Walkman } from "./States";

export interface IWalkmanState {
    Closed(walkman: Walkman): void; 
    Open(walkman: Walkman): void; 
    Playing(walkman: Walkman): void; 
}