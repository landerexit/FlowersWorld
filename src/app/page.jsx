import Image from "next/image";
import Slider from "./ui/slider";
import "./styles.sass";
import Link from "next/link";

function Home() {
    const categories = [
        [
            {
                name: "Каскадные",
                id: 0
            },
            {
                name: "Круглые",
                id: 1
            },
            {
                name: "Каркасные",
                id: 2
            },
            {
                name: "Линейные",
                id: 3
            },
            {
                name: "Букеты",
                id: 4
            },
            {
                name: "Ассиметричные",
                id: 5
            }
        ],
        [
            {
                name: "Розы",
                id: 6
            },
            {
                name: "Пионы",
                id: 7
            },
            {
                name: "Хризантемы",
                id: 8
            },
            {
                name: "Тюльпаны",
                id: 9
            },
            {
                name: "Альстромерии",
                id: 10
            },
            {
                name: "Гарберы",
                id: 11
            },
            {
                name: "Гортензии",
                id: 12
            }
        ],
    ];

    const salesData = [
        {
            title: "Алый закат",
            img: "/assets/img/sales/1.png",

            new_price: "23 421",
            old_price: "30 212",
        },
        {
            title: "Алый закат",
            img: "/assets/img/sales/1.png",

            new_price: "23 421",
            old_price: "30 212",
        },
        {
            title: "Алый закат",
            img: "/assets/img/sales/1.png",

            new_price: "23 421",
            old_price: "30 212",
        },
        {
            title: "Алый закат",
            img: "/assets/img/sales/1.png",

            new_price: "23 421",
            old_price: "30 212",
        },
        {
            title: "Алый закат",
            img: "/assets/img/sales/1.png",

            new_price: "23 421",
            old_price: "30 212",
        },
        {
            title: "Алый закат",
            img: "/assets/img/sales/1.png",

            new_price: "23 421",
            old_price: "30 212",
        },
        {
            title: "Алый закат",
            img: "/assets/img/sales/1.png",

            new_price: "23 421",
            old_price: "30 212",
        },
    ];

    const reviewsData = [
        {
            name: "Александр Поляков",
            text: "Отличный выбор букетов и композиций! Недавно был у вас и остался доволен широким ассортиментом и профессиональным подходом сотрудников. Все мои пожелания были учтены, а созданный вами букет стал настоящим украшением праздника. Спасибо за вашу работу!",
            date: "23.12.2023"
        },
        {
            name: "Наталья Милонова",
            text: "Вежливый персонал помог выбрать идеальный букет для особого события. Порадовал сервис доставки: цветы привезли прямо к порогу получателя в удобное для меня время. Цветы выглядят свежими и красивыми, именинница в восторге. Однозначно рекомендую этот магазин!",
            date: "10.12.2023"
        },
        
    ];

    return (
        <>
            <section className="hero">
                <div className="hero__text">
                    <h1 className="hero__title title title-clr">
                        Лучшие букеты
                        <br /> для самых любимых
                    </h1>
                    <p className="hero__descr">
                        Не упустите возможность порадовать 
                        <br />своих близких восхитительно красивыми цветами
                    </p>
                    <Link
                        className="btn-1"
                        href="/catalog/"
                    >
                        Посмотреть каталог
                    </Link>
                </div>
                <div className="hero__slider">
                    <Image
                        src="/assets/img/hero/1.png"
                        alt="Фото"
                        className="hero__img"
                        width={720}
                        height={720}
                    />
                </div>
            </section>

            <section className="categories page__tile">
                <h2 className="title title-clr">Категории</h2>
                <div className="categories__list">
                    {
                        categories.map((category, categoryIndex) => {
                            return (
                                <>
                                    <div 
                                        className="categories__sublist"
                                        key={"categoryList" + categoryIndex}
                                    >
                                        {
                                            category.map((subcategory, subcategoryIndex)=>{
                                                return (
                                                    <Link 
                                                        key={"subcategory" + category.name + subcategoryIndex}
                                                        href={"/category/" + subcategory.id}
                                                        className="btn-1"
                                                    >
                                                        {
                                                            subcategory.name
                                                        }
                                                    </Link>
                                                )
                                            })
                                        }
                                    </div>
                                </>
                            );
                        })
                    }
                </div>
            </section>

            <section className="sales page__tile">
                <h2 className="title title-clr">Горячие предложения</h2>
                <Slider title="special" data={salesData} />
            </section>

            <section className="sales page__tile">
                <h2 className="title title-clr">Новинки</h2>
                <Slider title="new" data={salesData} />
            </section>

            <section className="reviews page__tile">
                <h2 className="title title-clr">Отзывы</h2>
                <div className="reviews__list">
                    {
                        reviewsData.map((review, reviewIndex) => {
                            return (
                                <div 
                                    className="reviews__unit" 
                                    key={"review"+reviewIndex}
                                >
                                    <h3 className="reviews__title">
                                        {review.name}
                                    </h3>
                                    <p className="reviews__text">
                                        {review.text}
                                    </p>
                                    <p className="reviews__data">
                                        {review.date}
                                    </p>
                                    <Image 
                                        className="reviews__quote"
                                        alt="Знак цитирования"
                                        src="/assets/icons/quote.svg"
                                        width={32}
                                        height={32}
                                    />
                                    <div className="reviews__background"></div>
                                </div>
                            );
                        })
                    }
                </div>
            </section>
        </>
    );
}

export default Home;
