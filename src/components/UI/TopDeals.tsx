import "../../styles/topdeals.scss";
import { topDealUsers } from "../../data";
import { Image } from "../../UI";

export default function TopDeals() {
  return (
    <article className="topdeals">
      <h2 className="topdeals__title">Top deals</h2>
      <ul className="topdeals__list">
        {topDealUsers.map(({ id, amount, email, img, username }) => (
          <li className="topdeals__item" key={id}>
            <Image
              imgClass="topdeals__img"
              imgSrc={img}
              imgAlt="user"
              imgTitle="user"
              imgStyle={{}}
            />
            <div className="topdeals__info">
              <p className="topdeals__username">{username}</p>
              <span className="topdeals__email">{email}</span>
            </div>
            <span className="topdeals__amount">R$ {amount},00</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
