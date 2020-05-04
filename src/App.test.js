import { subtraction , total} from "./App";

const add = jest.fn( () =>5);

/* Unit test */
/* Tests only one thing */

test('add' , ()=>{
    expect(add(2,3)).toBe(5);
    // Check if the function was wallet n times
    expect(add).toHaveBeenCalledTimes(1);
    // Check if the function was called with the proper arguments/
    expect(add).toHaveBeenCalledWith(1,3);
});

test ('subtraction' , () =>{
    expect(subtraction(5,3)).toBe(2);
});
/* Integration test  */

test('total' , () =>{
    expect(total(5,20)).toBe('$25');
});