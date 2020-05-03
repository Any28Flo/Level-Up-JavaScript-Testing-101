import {add} from "./App";
import {subtraction} from "./App";

//Unit testing
//Only test one thing

test('add' , ()=>{
    const value = add(2,3);
    expect(value).toBe(5);
});

test ('subtraction' , () =>{
    const value = subtraction(5,3);
    expect(value).toBe(2);
});
