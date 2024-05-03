import { Link } from "react-router-dom";
import { Image } from "../UI";
import "../styles/menu.scss";
import { menuData } from "../data";

export default function Menu() {
  return (
    <div className="menu">
      <ul className="menu__wrapper element-scroll">
        {menuData.map((item) => (
          <li className="menu__item" key={item.title}>
            <h2 className="menu__title">{item.title}</h2>
            <ul className="menu__list">
              {item.listItems.map((link) => (
                <li className="menu__list-item" key={link.title}>
                  <Link className="menu__link" to={link.url}>
                    <Image
                      iconSrc={link.icon}
                      IconAlt={link.title}
                      iconTitle={link.title}
                      iconStyle={{ width: "20px", height: "20px" }}
                    />
                    {link.title}
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
