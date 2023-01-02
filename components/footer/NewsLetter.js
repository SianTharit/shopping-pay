import Link from "next/link";
import style from "./styles.module.scss";

function NewsLetter() {
  return (
    <div className={style.footer__newsletter}>
      <h3>SIGN UP FOR OUR NEWSLETTER</h3>
      <div className={style.footer__flex}>
        <input type="text" placeholder="Your Email Address" />
        <button className={style.btn_primary}>SUBSCRIBE</button>
      </div>
      <p>
        By clicking the SUBSCRIBE button, you are agreeing to{" "}
        <Link href="">our Privacy & Cookie Policy</Link>
      </p>
    </div>
  );
}

export default NewsLetter;
