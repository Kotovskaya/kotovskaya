import "./burger-mobile.css";
import { Link } from "react-router-dom";
import vk from "src/shared/assets/vk 3.svg";
import wa from "src/shared/assets/wa.svg";
import tg from "src/shared/assets/tg.svg";
export function BurgerMobile(props: any) {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        props.setBurgerClicked(false);
        document.body.style.overflow = "auto";
      }}
      className="burger__forclick"
    >
      <div className="burger" onClick={(e) => e.stopPropagation()}>
        <div className="burger__items">
          <Link to={"/delivery-information"}>
            <div
              onClick={() => {
                props.setBurgerClicked(false);
                document.body.style.overflow = "auto";
              }}
              className="burger__item"
            >
              <p>доставка</p>
            </div>
          </Link>
          <Link to={"/contacts"}>
            <div
              onClick={() => {
                props.setBurgerClicked(false);
                document.body.style.overflow = "auto";
              }}
              className="burger__item"
            >
              <p>контакты</p>
            </div>
          </Link>
        </div>
        <div className="burger__item">
          <p>Мы в соцсетях</p>
          <div className="smblock">
            <img src={vk} alt="" />
            <img src={wa} alt="" />
            <img src={tg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
