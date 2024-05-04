import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { Image, user2Icon, userIcon } from "../../UI";
import "../../styles/chartbox.scss";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
    val: 10,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
    val: 12,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
    val: 13,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
    val: 4,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
    val: 5,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
    val: 14,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
    val: 9,
  },
];

export default function ChartBox() {
  const precentData = data
    .map((el) => el.val)
    .reduce((acc, currVal) => acc + currVal, 0);
  return (
    <div className="chartbox">
      <div className="chartbox__info">
        <figure className="chartbox__figure">
          <Image
            imgClass="chartbox__icon"
            imgSrc={userIcon}
            imgAlt="image"
            imgTitle="image"
            imgStyle={{}}
          />
          <figcaption>Total de Usuários</figcaption>
        </figure>
        <p className="chartbox__amount">11.238</p>
        <Link className="chartbox__link" to="/users">
          Ver todos
        </Link>
      </div>

      <div className="chartbox__data">
        <div className="chartbox__chart">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart width={300} height={100} data={data}>
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chartbox__content">
          <p
            className={`chartbox__percentage chartbox__percentage--${
              precentData > 50 ? "up" : "down"
            }`}
          >
            {precentData}%
          </p>
          <span className="chartbox__monthly">Este mês</span>
        </div>
      </div>
    </div>
  );
}
