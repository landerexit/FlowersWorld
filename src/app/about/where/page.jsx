import Image from 'next/image';
import '../styles.sass'

export const metadata = {
    title: "Где нас найти? - Мир Цветов",
    description: `Магазин "Мир цветов" в г. Астрахань`,
};

function AboutWhere() {
    return (
        <section className="page__tile about">
            <div className="about__info">
                <h1 className="title title-clr">
                    Где нас найти?
                </h1>
                <div className='about__contacts'>
                    <h2>
                        Тел:
                    </h2>
                    <p>
                        +7 (123) 123-12-12
                        <br/>
                        +7 (123) 123-12-12
                    </p>
                    <h2>
                        Почта:
                    </h2>
                    <p>
                        flowers@sd.ru
                    </p>
                    <h2>
                        Адрес:
                    </h2>
                    <p>
                        г. Астрахань, ул. Пушкина, д. 10
                    </p>
                </div>
            </div>
            <div className='about__map__wrapper'>
                <Image
                    src="/assets/img/about/map.png"
                    alt="Карта"
                    className="about__map"
                    width={1200}
                    height={1200}
                />
            </div>
        </section>
    );
}

export default AboutWhere;