import { useContext } from "react";
import "./Card.css";
import { ThemeContext } from "../../context/ThemeContext";


function Card({ icon, title }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`card ${theme}`}>
      <p className="icon">{icon}</p>
      <h2>{title}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        soluta distinctio ratione voluptatem, quisquam maiores! Veniam placeat
        repellat ratione tempore nesciunt ab eum et.
      </p>
    </div>
  );
}

export default Card;
