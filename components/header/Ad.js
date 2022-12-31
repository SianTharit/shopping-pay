import style from "./styles.module.scss";
import Link from "next/link";

export default function Ad() {
  return (
    <Link href="/browse" legacyBehavior>
      <div className={style.ad}></div>
    </Link>
  );
}
