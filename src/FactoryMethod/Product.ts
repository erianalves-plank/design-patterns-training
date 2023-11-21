export interface Synthetics {
    identification: string;
    introduce(): void;
    skills(): void;
}

export class Robot implements Synthetics {
    identification: string;
    constructor(name: string) {
        this.identification = name;
    }

    public introduce(): void {
        console.log('Hello, I am the robot ', this.identification, '.');
        console.log('I am build to mimic life. I can perform a variaty of tasks with or without human supervision.');
    }

    public skills(): void {
        console.log('\n------------------\n');
        console.log('--> Skillset:');
        console.log('In this version, I am able to perform the following tasks:');
        console.log('- Clean the house;');
        console.log('- Cook meals;');
        console.log('- Take care of children;');
        console.log('- Take care of the elderly;');
        console.log('- Take care of pets;');
        console.log('- Take care of plants;');
        console.log('\n---------\\\-------\n');
    }
}

export class Android implements Synthetics {
    identification: string;
    constructor(name: string) {
        this.identification = name;
    }

    introduce(): void {
        console.log('Hello, I am the android ' + this.identification + '.');
        console.log('I am build to be a robot who shape like a human. The intentions are we mimic humans in form and behavior.');
    }
    skills(): void {
        console.log('\n------------------\n');
        console.log('--> Skillset:');
        console.log('In this version, I am considered a human-like robot. I can be configured to act in different scenarios.');
        console.log('But I also can be set to develop my own personality and behavior.');
        console.log('\n---------\\\-------\n');
    }
}

export class Cyborg implements Synthetics {
    identification: string;
    constructor(name: string) {
        this.identification = name;
    }

    introduce(): void {
        console.log('Hello, I am ' + this.identification + ', the cyborg.');
        console.log('I am build to be a human with robotic parts. Through this, humans can be enhanced with robotic parts.');
    }
    skills(): void {
        console.log('\n------------------\n');
        console.log('--> Skillset:');
        console.log('Learn and Evolve');
        console.log('\n---------\\\-------\n');
    }
}