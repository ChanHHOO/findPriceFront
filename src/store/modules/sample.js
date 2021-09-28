const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';

let id = 0

export const changeInput = input => ({type:CHANGE_INPUT, payload:input});
export const insert = text => ({
    type:INSERT,
    payload:{
        id: ++id,
        text,
    }
})