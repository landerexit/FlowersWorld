'use client';

import Image from "next/image";
import Link from "next/link";
import "./styles.sass";
import React from "react";

function Header() {
    const iconSize = 36;
    const iconSizeSmall = iconSize - 6;
    const logged = false;

    const [userModalHidden, setUserModalHidden] = React.useState(true);

    return (
        <header className="header max-width">
            <Link className="header__logo" href="/">
                <Image
                    src="/assets/icons/logo.svg"
                    alt="Логотип"
                    width={iconSize}
                    height={iconSize}
                />
                <p className="title-clr">Мир цветов</p>
            </Link>
            <nav className="header__nav">
                <ul>
                    <li>
                        <a href="/catalog">Каталог</a>
                    </li>
                    <li>
                        <a href="/about">О нас</a>
                    </li>
                    <li>
                        <a href="/where">Где нас найти?</a>
                    </li>
                </ul>
            </nav>
            <div className="header__right">
                <input
                    type="text"
                    placeholder="Поиск по каталогу"
                    className="header__search"
                />
                <Link href="/cart/">
                    <Image
                        src="/assets/icons/cart.svg"
                        alt="Корзина"
                        className="header__icon"
                        width={iconSizeSmall}
                        height={iconSizeSmall}
                    />
                </Link>

                <button onClick={() => {setUserModalHidden(false)}}>
                    <Image
                        src="/assets/icons/user.svg"
                        alt="Настройки"
                        className="header__icon"
                        width={iconSizeSmall}
                        height={iconSizeSmall}
                    />
                </button>
                
                <div 
                    className={"header__modal " + (userModalHidden ? "hidden" : "")}
                    onMouseLeave={() => {setUserModalHidden(true)}}
                >
                    {logged ?
                        (
                            <>
                                <Link href="/profile/">
                                    <p>
                                        Иванов Иван
                                    </p>
                                    <p>
                                        + 7 (123) 123-23-23
                                    </p>
                                </Link>
                                <button>
                                    Выйти
                                </button>
                            </>
                        ) : (
                            <>
                                <Link href="/login/">
                                    Вход
                                </Link>
                                <Link href="/registration/">
                                    Регистрация
                                </Link>
                            </>
                        )
                    }
                </div>
            </div>
        </header>
    );
}

export default Header;
