import TicketNum from "./TicketNum";

export default function Ticket({ ticket }) {
    return (
        <div>
            {ticket.map((val, idx) => (
                <TicketNum num={val} />
            ))}
        </div>
    )
}