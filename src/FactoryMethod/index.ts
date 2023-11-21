import { AndroidFactory, CyborgFactory, RobotFactory, SyntheticFactory } from "./Factory";

const presentingSynthetics = (factory: SyntheticFactory, identification: string) => {
    const synthetic = factory.createSynthetic(identification);
    synthetic.introduce();
    synthetic.skills();
}

export const TestingFactoryMethod = () => {
    console.log('\nTesting Factory Method\n');
    console.log('\n\n');

    presentingSynthetics(new RobotFactory(), 'R2-D2');

    presentingSynthetics(new AndroidFactory(), 'Ash');

    presentingSynthetics(new CyborgFactory(), 'Robocop');
}
