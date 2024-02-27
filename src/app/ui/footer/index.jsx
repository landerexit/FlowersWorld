import Link from "next/link";
import Image from "next/image";

import "./styles.sass";

function Footer() {
    return (
        <footer className="footer__wrapper">
            <section className="footer max-width">
                <div className="footer__column footer__logo-column">
                    <div className="footer__tile footer__logo">
                        <Image
                            src="/assets/icons/logo.svg"
                            alt=""
                            width={48}
                            height={48}
                        />
                        <p className="title-clr">Мир цветов</p>
                    </div>

                    <div className="footer__tile">
                        <Image
                            src="/assets/icons/location.svg"
                            alt="Адрес"
                            width={24}
                            height={24}
                        />
                        <div>
                            <p>г. Астрахань, ул. Пушкина, д. 10</p>
                        </div>
                    </div>
                </div>
                <div className="footer__column">
                    <div className="footer__tile">
                        <Image
                            src="/assets/icons/phone.svg"
                            alt="Телефон"
                            width={24}
                            height={24}
                        />
                        <div>
                            <p>+7 (123) 123-12-12</p>
                            <p>+7 (123) 123-12-12</p>
                        </div>
                    </div>
                    <div className="footer__tile">
                        <Image
                            src="/assets/icons/schedule.svg"
                            alt="Расписание"
                            width={24}
                            height={24}
                        />
                        <div>
                            <p>
                                пн-пт: <span>10:00-20:00</span>
                            </p>
                            <p>
                                сб-вс: <span>10:00-19:00</span>
                            </p>
                        </div>
                    </div>
                </div>
                <nav className="footer__nav">
                    <ul>
                        <li>
                            <Link href="/">Главная</Link>
                        </li>
                        <li>
                            <Link href="/catalog/">Каталог</Link>
                        </li>
                        <li>
                            <Link href="/about/">О нас</Link>
                        </li>
                        <li>
                            <Link href="/about/where/">Где нас найти?</Link>
                        </li>
                    </ul>
                </nav>
            </section>
            <section className="footer__bottom max-width">
                    <p>@ 2006 - 2024 "Мир Цветов" г.Астрахань</p>
                    <p>Цены на сайте могут отличаться от цен в магазине</p>
                    <p>Политика конфеденциальности</p>
            </section>
        </footer>
    );
}

export default Footer;
