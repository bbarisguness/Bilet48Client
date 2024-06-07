import Link from "next/link";

export default function LeftMenu({ activeLink }) {
  return (
    <div className="col-lg-3">
      <nav className="page-menu">
        <ul>
          <li className={`${activeLink == "hakkimizda" ? "active" : ""}`}>
            <Link href="/hakkimizda">Hakkımızda</Link>
          </li>
          <li
            className={`${activeLink == "gizlilik-politikasi" ? "active" : ""}`}
          >
            <Link href="/gizlilik-politikasi">Gizlilik</Link>
          </li>
          <li
            className={`${
              activeLink == "kullanici-sozlesmesi" ? "active" : ""
            }`}
          >
            <Link href="/kullanici-sozlesmesi">Kullanıcı Sözleşmesi</Link>
          </li>
          <li
            className={`${activeLink == "kullanim-kosullari" ? "active" : ""}`}
          >
            <Link href="/kullanim-kosullari">Kullanım Koşulları</Link>
          </li>
          <li className={`${activeLink == "kvkk" ? "active" : ""}`}>
            <Link href="/kvkk">KVKK</Link>
          </li>
          <li className={`${activeLink == "iletisim" ? "active" : ""}`}>
            <Link href="/iletisim">İletişim</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
