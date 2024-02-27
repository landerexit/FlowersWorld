import Image from "next/image";
import Link from "next/link";

import './styles.sass'

export const metadata = {
    title: "О нас - Мир Цветов",
    description: `Магазин "Мир цветов" в г. Астрахань`,
};

function About() {
    return (
        <section className="about page__tile">
            <div className="about__info">
                <h1 className="title title-clr">
                    О нас
                </h1>
                <Link className="logo" href="/">
                    <Image
                        src="/assets/icons/logo.svg"
                        alt="Логотип"
                        width={56}
                        height={56}
                    />
                    <p className="title-clr">Мир цветов</p>
                </Link>
                <p className="about__description">
                    Мы, “Мир Цветов”, студия флористики и работаем больше 10-ти лет.
                    <br /><br />
                    Наша команда будет рада вложить весь свой опыт и усилия, чтобы удовлетворить все ваши требования.
                </p>
            </div>
            <div className="about__slider">
                <Image
                    src="/assets/img/hero/1.png"
                    alt="Фото"
                    className="hero__img"
                    width={720}
                    height={720}
                />
            </div>
        </section>
    );
}

export default About;