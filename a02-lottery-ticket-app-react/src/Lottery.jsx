import { useState } from "react"
import "./Lottery.css"
import { generateTicket,sum } from "./helper";
import Ticket from "./Ticket";
import Button from "./Button";

export default function Lottery({n, winCondition}) {

    let [ticket, setTicket] = new useState(generateTicket(n));
  
    let isWinning = winCondition(ticket);
    
    let buyTicket = () =>{
        setTicket(generateTicket(n));
    }

    return (
        <div>
            <h1>Lottery Game!</h1>
            <div className="ticket">
                <Ticket ticket={ticket}/>
            </div>
            <Button action={buyTicket}/>
            <h3>{isWinning && "Congratulation,you won!"}</h3>
        </div>
    )
}