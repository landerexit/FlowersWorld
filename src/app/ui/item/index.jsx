import Image from "next/image";

import "./styles.sass";

function Item({item}) {
    return (
        <div className="item">
            <Image
                src={item.img}
                alt={item.title}
                width={400}
                height={400}
                className="item__img"
            />
            <div className="item__bottom">
                <div className="item__descr">
                    <h3 className="item__title">
                        {item.title}
                    </h3>
                    <p className="item__price">
                        {item.new_price + " ₽"}
                        <span className="item__price__old">
                            {item.old_price + " ₽"}
                        </span>
                    </p>
                </div>
                <button className="item__cart">
                    <img
                        src="/assets/icons/cartWhite.svg"
                        alt="Добавить в корзину"
                    />
                </button>
            </div>
        </div>
    );
}

export default Item;