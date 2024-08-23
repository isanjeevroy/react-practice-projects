import { sum } from "./helper";

function winCondition(ticket){
    return sum(ticket)===15;
    // return ticket.every((num)=>num===ticket[0]);
};

export {winCondition};