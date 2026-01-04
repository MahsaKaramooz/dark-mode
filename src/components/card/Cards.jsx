import Card from "./Card";
import "./Cards.css";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";

const cards = [
  {
    id: 1,
    title: "react js",
    icon: <FaReact />,
  },
  {
    id: 2,
    title: "node js",
    icon: <FaNodeJs />,
  },
  {
    id: 3,
    title: "tailwind css",
    icon: <RiTailwindCssFill />,
  },
  {
    id: 4,
    title: "bootstrap",
    icon: <FaBootstrap />,
  }
];

function Cards() {
  return (
    <div className="cards">
      {cards.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
}
export default Cards;
