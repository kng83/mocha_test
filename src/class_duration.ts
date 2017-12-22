import { setTimeout } from "timers";

export class Duration{

    public name: string;

    constructor(name:string){
        this.name = name;
   }

   timeOut(){
        return new Promise<any>((resolve)=>{
            
                setTimeout(()=>{
                console.log(this.name);
                resolve(this.name);
            },1000)
        });
    }
} 