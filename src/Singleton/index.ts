import { Singleton } from "./Singleton";



export function TestingSingleton(){
    const instanceI = Singleton.GetInstance();
    const instanceII = Singleton.GetInstance();


    if (instanceI === instanceII){
        console.log('Seems to work');
    }
    else {
        console.log('Oh no');
    }
    instanceI.AddClientInfo('John', '01/01/2000', new Date().toString());
    instanceII.AddClientInfo('Mary', '01/04/2005', new Date().toString());
    instanceI.AddClientInfo('Peter', '01/06/2095', new Date().toString());
}