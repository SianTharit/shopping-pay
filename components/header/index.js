import Ad from "./Ad";
import Main from "./Main";
import style from "./styles.module.scss";
import Top from "./Top";

export default function Header({ country }) {
  return (
    <header className={style.header}>
      <Ad />
      <Top country={country} />
      <Main />
    </header>
  );
}
