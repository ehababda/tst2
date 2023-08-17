import "./Ticket.css";
export default function Ticket({ ticket }) {
    if (!ticket)
        return <div>🥲</div>
    const { name, dest, gender, seat } = ticket;
    
    return (
        <div className="ticketContainer">
            <h1 className="title"> Ticket Detales</h1>
            <div className="filedContainer">
            <p className="field"> name:{name}</p>
            <p className="field"> destnation:{dest}</p>
            <p className="field"> Gender:{gender}</p>
                <p className="field"> Seat:{seat}</p>
                </div>
        </div>
    )
    
}