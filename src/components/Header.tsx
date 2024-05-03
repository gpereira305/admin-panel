import { Link } from "react-router-dom";
import { Image } from "../UI";
import logoIcon from "../assets/icons/conversionIcon.svg";
import searchIcon from "../assets/icons/search.svg";
import appIcon from "../assets/icons/app.svg";
import expandIcon from "../assets/icons/expand.svg";
import notificationsIcon from "../assets/icons/notifications.svg";
import settingsIcon from "../assets/icons/settings.svg";
import "../styles/header.scss";
export default function Header() {
  const iconsStyleProperties = {
    width: "20px",
    height: "20px",
  };

  const counter = (val: number) => (val > 9 ? "9+" : val);

  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" className="header__logo">
          <Image
            iconSrc={logoIcon}
            IconAlt="logo"
            iconTitle="logo"
            iconStyle={{ width: "50px", height: "50px" }}
          />
        </Link>

        <div className="header__icons">
          <Image
            iconSrc={searchIcon}
            IconAlt="Pesquisar"
            iconTitle="Pesquisar"
            iconStyle={iconsStyleProperties}
          />
          <Image
            iconSrc={appIcon}
            IconAlt="App"
            iconTitle="App"
            iconStyle={iconsStyleProperties}
          />
          <Image
            iconSrc={expandIcon}
            IconAlt="Expandir"
            iconTitle="Expandir"
            iconStyle={iconsStyleProperties}
          />
          <div className="header__notification">
            <Image
              iconSrc={notificationsIcon}
              IconAlt="Notificações"
              iconTitle="Notificações"
              iconStyle={{}}
            />
            <span className="header__counter">{counter(10)}</span>
          </div>

          <figure className="header__profile" style={{}}>
            <Image
              iconSrc="https://picsum.photos/200"
              IconAlt="Jefferson"
              iconTitle="Jefferson"
              iconStyle={{}}
            />
            <figcaption>Jefferson</figcaption>
          </figure>

          <Image
            iconSrc={settingsIcon}
            IconAlt="Ajustes"
            iconTitle="Ajustes"
            iconStyle={iconsStyleProperties}
          />
        </div>
      </div>
    </header>
  );
}
