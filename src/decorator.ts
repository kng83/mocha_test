import chalk from 'chalk';


/*Prosty decorator w przypadku pobierania nazwy konstruktora (prototypu)
* nalezy zrobic rzutowanie typu
*
* */

function simpleDecorator(constructor: Function) {
    console.log('decorator started and is super');
    console.log(`to jest constructor: ${constructor}`);
    console.log(`to jest constructor.name ${(<any>constructor).name}`)

    //dodanie nowej wlaciwosci;
    constructor.prototype.myprop = 'bolek';

}

@simpleDecorator
class simpleClass {
    arg: string = 'kot';
    arg2: string = 'pies';
    myName: string;

    constructor(public name: string) {
        this.myName = name;
    }

    getName() {
        // pobranie nazwy klasy
        return (<any>this.constructor).name
    }
}

let me = new simpleClass('Jurek');
console.log((<any>me).myprop);
console.log(me.getName());

/*Aby dekoratory mogly przyjmowac wartosci nalezy uzyc fabryki
* dekoratorow*/

function factoryDecorator(name: string) {
    return function (constr: Function) {
        console.log(`Parametr przekazywany fabryka: ${name}`)
    }
}

function factoryAddPropertyDec(name: string) {
    return function (constr: Function) {
        constr.prototype.newProp = name;
        constr.prototype.arg1 = 6;
        console.log('lista properties:', constr.prototype);
    }
}

@factoryDecorator('Jack')
@factoryAddPropertyDec('Piotrek')
class testWithFactory {
    arg1: number; //jezeli brak wartosc to dekorator to nadpisze
}

let tesWF = new testWithFactory();
console.log(chalk.blue(`Nowa wlasciwosc od fabryki agr1 dziala jezeli brak wartosci w klasie: ${(<any>tesWF.arg1)}`));


/*Dodawanie dekoratora do wlasciwosci klasy properties
od klasy
* */

function propertyDec(target: any, propertyKey: string) {
    console.log(chalk.magenta(`target: ${target}`));
    console.log(`propertyDecorator target.constructor: ${target.constructor}`);
    console.log(`propertyDecorator target.constructor.name: ${target.constructor.name} `);
    console.log(`propertyDecorator propertyKey ${propertyKey}`);
    console.log(`propertyDecorator propertyKey sprawdzenie typu ${typeof propertyKey}`);
    target.constructor.prototype.propNazwa = 'bobo';
}

class classTestProperty {
    @propertyDec
    propNazwa: string;
}

let tP = new classTestProperty();
console.log(tP.propNazwa);


/* Using decorators with methods.
 Must be 3 arguments (target:any ,methodName:string, descriptor:PropertyDescriptor
 ***/

function methodDecorator(target: any, methodName: string, descriptor?: PropertyDescriptor) {
    console.log(chalk.magenta(`methodDecorator target: ${target} `));
    console.log(`methodDecorator methodName: ${methodName}`);
    console.log(`methodDecorator whole function: ${target[methodName]}`)
    console.log(`methodDecorator descriptor: ${descriptor.value}`)
    console.log(`another target.constructor name: ${target.constructor.name}`)

}

function auditDecorator(target: any, methodName: string, descriptor?: PropertyDescriptor) {
    let orginalFunction = target[methodName];

    let auditFunction = function () {
        console.log(`Wywolano podmienina wersje funkcji ${methodName}`);
        orginalFunction.apply(this, arguments);
    };

    target[methodName] = auditFunction;
    return target;
}


class HelpMethodClass {
    @methodDecorator
    print(output: string) {
        console.log(chalk.blue(`To jest output funkcji print: ${output}`));
    }

    @auditDecorator
    show(output: string) {
        console.log(`This is output from show: ${output}`);

    }
}

let helpM = new HelpMethodClass();
helpM.print('pawel');
helpM.show('bobo');

/*Koniec dekoratorow metod
* */


/*Dekoratory parametrow ponoc niezbyt przydatne*/

function parameterDecorator(target: any, methodName: string, parameterIndex: number) {
    console.log(chalk.blue(`parameterDecorator target: ${target}`));
    console.log(`parameterDecorator class name: ${target.constructor.name}`);
    console.log(`parameterDecorator custom: ${target[methodName]}`);
    console.log(`parameterDecorator methodName: ${methodName}`);
    console.log(`parameterDecorator parameterIndex: ${parameterIndex}`);
    console.log(`parameterDecorator empty test}`);

    //to ponizej nie dziala moze z wersja apply by dzialalo
    target[methodName] = function (value: string) {
        return 'Arnold';

    }
    return target;
}


class ParaDecClass {
    print(@parameterDecorator value?: string) {
        return value;
    }
}

let pdc = new ParaDecClass();
console.log(pdc.print());


/*test funkcji z apply*/
let first = function (value: string = '4') {
    console.log(`This is value ${value}`)
    return value;
}

let second = function (...options: any[]) {
    let kot = function (name: string) {
        return 4;
    }
    console.log('Pies ktory biega');
    return first.apply(this, arguments); //zwraca nowy argument
    // return first.apply(this,arguments[this]); //zwraca argument z first
}

console.log(chalk.cyan(second('11')));
