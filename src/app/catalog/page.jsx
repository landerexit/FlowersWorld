import Link from 'next/link';
import './styles.sass'
import Item from '../ui/item';

export const metadata = {
    title: "Каталог - Мир Цветов",
    description: `Каталог всех цветов магазина "Мир Цветов" г. Астрахань`
}

function Catalog() {
    const categories = [
        {
            name: "Композиция",
            list: [
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
        },
        {
            name: "Состав",
            list: [
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
        },
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
    
    return (
        <section className="catalog page__tile">
            <h1 className="title">КАТАЛОГ</h1>
            <div className='catalog__main'>
                <aside className='catalog__categories'>
                {
                        categories.map((category, categoryIndex) => {
                            return (
                                <div key={"categoryList" + categoryIndex} className='catalog__category'>
                                    <h2>
                                        {
                                            category.name
                                        }
                                    </h2>
                                    <div className="catalog__subcategories">
                                        {
                                            category.list.map((subcategory, subcategoryIndex)=>{
                                                return (
                                                    <button
                                                        key={"subcategory" + category.name + subcategoryIndex}
                                                        href={"/category/" + subcategory.id}
                                                    >
                                                        {
                                                            subcategory.name
                                                        }

                                                        <input type="checkbox" name="" id="" />
                                                    </button>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            );
                        })
                }
                </aside>
                <div className='catalog__list'>
                    {
                        salesData.map((item, itemIndex)=>{
                            return (
                                <Item item={item} key={"item"+itemIndex}/>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default Catalog;
