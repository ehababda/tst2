import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Ticket from "./components/Ticket";


function App() {
  //part 1 - declare vars, let , state
  const user = {
    firstname: "Oren",
    lastname: "Zvi",
  };
  const tickets = [
    {name: "ehab", dest: "london", gender: "Mr",seat: "17A"},
    {name: "ehab", dest: "london", gender: "Mr",seat: "17A"},
    {name: "ehab", dest: "london", gender: "Mr",seat: "17A"},
    { name: "yara", dest: "london", gender: "Ms", seat: "18A" }
  ];
  //part 2 - functions effects
  function fullName() {
    return user.firstname + " " + user.lastname;
  }
  const myPassengers = tickets.map((t) => {
    return (
      <div style={{marginLeft:"50px",marginBottom:"30px"}}>
        <Ticket ticket={t} />
        </div>
    );
  });
  const myPassengers1 = tickets.map((t)=> {
    return <Ticket ticket={t} />;
  });
  //part 3 - jsx
  return (
    <div className="container">
       <h1>Good morning</h1>
      <p>Hello {fullName()}</p>
      {/* <Nav user={user} /> */}
      <h2> Tickets</h2>
      {/* <Ticket></Ticket>
      <Ticket ticket={tickets[0]} />
      <Ticket ticket={tickets[1]} /> */}
      <div>
      {myPassengers}
      </div>

     
    </div>
  );
}

export default App;