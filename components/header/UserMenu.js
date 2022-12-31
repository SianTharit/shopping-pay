import style from "./styles.module.scss";
import Link from "next/link";

export default function UserMenu({ loggedIn }) {
  return (
    <div className={style.menu}>
      <h4>Welcome to Sopping-APP!</h4>
      {loggedIn ? (
        <div className={style.flex}>
          <img
            src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png"
            alt="profile-image"
            className={style.menu__img}
          />
          <div className={style.col}>
            <span>Welcome Back,</span>
            <h3>SIAN</h3>
            <span>Sign out</span>
          </div>
        </div>
      ) : (
        <div className={style.flex}>
          <button className={style.btn_primary}>Register</button>
          <button className={style.btn_outlined}>Login</button>
        </div>
      )}
      <ul>
        <li>
          <Link href="/profile">Account</Link>
        </li>
        <li>
          <Link href="/profile/orders">Mt Orders</Link>
        </li>
        <li>
          <Link href="/profile/messages">Message Center</Link>
        </li>
        <li>
          <Link href="/profile/address">Address</Link>
        </li>
        <li>
          <Link href="/profile/whishlist">Whishlist</Link>
        </li>
      </ul>
    </div>
  );
}
