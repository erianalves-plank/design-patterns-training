import { Android, Cyborg, Robot, Synthetics } from "./Product";

export interface SyntheticFactory {
    createSynthetic(identification: string): Synthetics;
}

export class RobotFactory implements SyntheticFactory {
    public createSynthetic(identification: string): Synthetics {
        return new Robot(identification);
    }
}

export class AndroidFactory implements SyntheticFactory {
    public createSynthetic(identification: string): Synthetics {
        return new Android(identification);
    }
}

export class CyborgFactory implements SyntheticFactory {
    public createSynthetic(identification: string): Synthetics {
        return new Cyborg(identification);
    }
}