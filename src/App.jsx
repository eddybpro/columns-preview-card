import "./App.css";
import Card from "./Card";
import { data } from "./data";

function App() {
  const cardElements = data.map((el) => (
    <Card key={el.id} carImg={el.photo} name={el.name} desc={el.description} />
  ));
  return <main>{cardElements}</main>;
}

export default App;
