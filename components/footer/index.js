import Copyright from "./Copyright";
import Links from "./Links";
import NewsLetter from "./NewsLetter";
import Payment from "./Payment";
import Socials from "./Socials";
import style from "./styles.module.scss";

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footer__container}>
        <Links />
        <Socials />
        <NewsLetter />
        <Payment />
        <Copyright />
      </div>
    </footer>
  );
}

export default Footer;
