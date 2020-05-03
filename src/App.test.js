import {add, subtraction , total} from "./App";


/* Unit test */
/* Tests only one function*/
test('add' , ()=>{
    expect(add(2,3)).toBe(5);
});

test ('subtraction' , () =>{
    expect(subtraction(5,3)).toBe(2);
});
/* Integration test  */

test('total' , () =>{
    expect(total(5,20)).toBe('$25');
});