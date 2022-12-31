import style from "./styles.module.scss";
import { MdSecurity } from "react-icons/md";
import { BsSuitHeart } from "react-icons/bs";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { RiArrowDropDownFill } from "react-icons/ri";
import Link from "next/link";
import { useState } from "react";
import UserMenu from "./UserMenu";

export default function Top() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [visible, setVisible] = useState(false);

  return (
    <div className={style.top}>
      <div className={style.top__container}>
        <div></div>
        <ul className={style.top__list}>
          <li className={style.li}>
            <img
              src="https://www.seekpng.com/png/full/323-3232715_morocco-flag-png-angel-tube-station.png"
              alt="morocco-flag"
            />
            <span>Morocco / usd</span>
          </li>
          <li className={style.li}>
            <MdSecurity />
            <span>Buyer Protection</span>
          </li>
          <li className={style.li}>
            <span>Customer Service</span>
          </li>
          <li className={style.li}>
            <span>Help</span>
          </li>
          <li className={style.li}>
            <BsSuitHeart />
            <Link href="/profile/whishlist" legacyBehavior>
              <span>Whishlist</span>
            </Link>
          </li>

          <li
            className={style.li}
            onMouseOver={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
          >
            {loggedIn ? (
              <li className={style.li}>
                <div className={style.flex}>
                  <img
                    src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png"
                    alt="profile-image"
                  />
                  <span>Sian</span>
                  <RiArrowDropDownFill />
                </div>
              </li>
            ) : (
              <li className={style.li}>
                <div className={style.flex}>
                  <RiAccountPinCircleLine />
                  <span>Account</span>
                  <RiArrowDropDownFill />
                </div>
              </li>
            )}
            {visible && <UserMenu loggedIn={loggedIn} />}
          </li>
        </ul>
      </div>
    </div>
  );
}
