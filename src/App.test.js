import {add} from "./App";
import {subtraction} from "./App";

//Unit testing
//Only test one thing

test('add' , ()=>{
    expect(add(2,3)).toBe(5);
});

test ('subtraction' , () =>{
    expect(subtraction(5,3)).toBe(2);
});
