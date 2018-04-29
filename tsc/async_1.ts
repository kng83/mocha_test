import {name,age} from './async_1_export';
import {first,second} from './async_2_export';
import {one,two} from './async_2_export';

setTimeout(()=>{
   // console.log(typeof one);
 //   console.log(one.name);
    console.log(one.whatName(),'other function');
    console.log(two.name, 'this is name');
    console.log(name,age)
    console.log(second.whatName());
    console.log(first.whatName());
    
    
},4000)