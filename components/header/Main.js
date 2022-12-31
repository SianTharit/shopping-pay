import Link from "next/link";
import style from "./styles.module.scss";
import { RiSearch2Line } from "react-icons/ri";
import { FaOpencart } from "react-icons/fa";
import { useSelector } from "react-redux";

function Main() {
  const { cart } = useSelector((state) => ({ ...state }));

  return (
    <div className={style.main}>
      <div className={style.main__container}>
        <Link href="/" className={style.logo}>
          <img src="../../../logo.png" alt="logo-shopping-app" />
        </Link>
        <div className={style.search}>
          <input type="text" placeholder="Search..." />
          <div className={style.search__icon}>
            <RiSearch2Line />
          </div>
        </div>
        <Link href="/cart" className={style.cart}>
          <FaOpencart />
          <span>{cart.length}</span>
        </Link>
      </div>
    </div>
  );
}

export default Main;
