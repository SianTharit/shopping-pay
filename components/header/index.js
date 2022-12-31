import Ad from "./Ad";
import style from "./styles.module.scss";
import Top from "./Top";

export default function Header() {
  return (
    <header className={style.header}>
      <Ad />
      <Top />
    </header>
  );
}
