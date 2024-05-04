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
            imgClass=""
            imgSrc={logoIcon}
            imgAlt="logo"
            imgTitle="logo"
            imgStyle={{ width: "50px", height: "50px" }}
          />
        </Link>

        <div className="header__icons">
          <Image
            imgClass=""
            imgSrc={searchIcon}
            imgAlt="Pesquisar"
            imgTitle="Pesquisar"
            imgStyle={iconsStyleProperties}
          />
          <Image
            imgClass=""
            imgSrc={appIcon}
            imgAlt="App"
            imgTitle="App"
            imgStyle={iconsStyleProperties}
          />
          <Image
            imgClass=""
            imgSrc={expandIcon}
            imgAlt="Expandir"
            imgTitle="Expandir"
            imgStyle={iconsStyleProperties}
          />
          <div className="header__notification">
            <Image
              imgClass=""
              imgSrc={notificationsIcon}
              imgAlt="Notificações"
              imgTitle="Notificações"
              imgStyle={{}}
            />
            <span className="header__counter">{counter(10)}</span>
          </div>

          <figure className="header__profile" style={{}}>
            <Image
              imgSrc="https://picsum.photos/200"
              imgAlt="Jefferson"
              imgTitle="Jefferson"
              imgStyle={{}}
            />
            <figcaption>Jefferson</figcaption>
          </figure>

          <Image
            imgClass=""
            imgSrc={settingsIcon}
            imgAlt="Ajustes"
            imgTitle="Ajustes"
            imgStyle={iconsStyleProperties}
          />
        </div>
      </div>
    </header>
  );
}
