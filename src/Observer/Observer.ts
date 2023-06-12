export type PrecosHorta = {
    tomato: number;
    carrot: number;
    lettuce: number;
    brocolli: number;
}

export interface Observer {
    update({tomato, carrot, lettuce, brocolli}: PrecosHorta): void;
}