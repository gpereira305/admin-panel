import { Link } from "react-router-dom";
import { Image } from "../UI";
import { menuData } from "../data";
import "../styles/menu.scss";

export default function Menu() {
  return (
    <div className="menu">
      <ul className="menu__wrapper element-scroll">
        {menuData.map(({ id, title, listItems }) => (
          <li className="menu__item" key={id}>
            <h2 className="menu__title">{title}</h2>
            <ul className="menu__list">
              {listItems.map(({ id, title, url, icon }) => (
                <li className="menu__list-item" key={id}>
                  <Link className="menu__link" to={url}>
                    <Image
                      imgSrc={icon}
                      imgAlt={title}
                      imgTitle={title}
                      imgStyle={{ width: "20px", height: "20px" }}
                    />
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
