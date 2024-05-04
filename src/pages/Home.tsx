import {
  TopDeals,
  ChartBox,
  TopBlock3,
  TopBlock4,
  TopBlock5,
  TopBlock6,
  TopBlock7,
  TopBlock8,
  TopBlock9,
} from "../components";
import "../styles/home.scss";

export default function Home() {
  const blocks = [
    <TopDeals />,

    <ChartBox />,
    <TopBlock3 />,
    <TopBlock4 />,
    <TopBlock5 />,
    <TopBlock6 />,
    <TopBlock7 />,
    <TopBlock8 />,
    <TopBlock9 />,
  ];

  return (
    <ul className="home">
      {blocks.map((item, index) => (
        <li className={`home__item home__item--${index + 1}`} key={index}>
          {item}
        </li>
      ))}
    </ul>
  );
}
