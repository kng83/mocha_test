import {SimpleClass} from './simple_class';

declare module './simple_class' {

    interface SimpleClass {
        setName(name:string):void;
    }
}

// Zmiana imienia
SimpleClass.prototype.setName = function (name) {
    this.name = name;
};


