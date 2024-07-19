import data from "../../data.js";
import { Card } from "./Card";

const mappedData = data.map((destination) => {
  return <Card className="card" key={destination.id} {...destination} />;
});

export function MainContent() {
  return (
    <div className="main-content__container">
      <section className="main-content">{mappedData}</section>
    </div>
  );
}
