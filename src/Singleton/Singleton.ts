import { appendFileSync } from 'fs';

export class Singleton {
    private static instance: Singleton;

    private constructor() {}

    public static GetInstance(){
        if (!Singleton.instance){
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }

    public AddClientInfo(name: string, birthday: string, loginTime: string){
        const filePath = 'src/Singleton/data/db.txt';
        const content = `${name} - ${birthday} - ${loginTime}\n`

        appendFileSync(filePath, content);

    }

}