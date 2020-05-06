import {total} from "./App";
import {add} from "./add";

//Represent fake function
jest.mock('./add' , () =>({
    add : jest.fn( () => 25)

}));


/* Integration test  */
/* Test things work together */
test('total' , () =>{
    expect(total(5,20)).toBe('$25');
    expect(add).toHaveBeenCalledTimes(1);
});