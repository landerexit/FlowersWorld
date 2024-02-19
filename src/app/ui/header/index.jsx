import Image from 'next/image';
import "./styles.sass";

function Header() {
    return (
        <header className="header">
            <div className='header__left'>
                <div className="header__logo">
                    <Image src="" alt="Логотип" />
                    <p>
                        Мир цветов
                    </p>
                </div>
                <nav className='header__nav'>
                    <ul>
                        <li>
                            <a href="">Каталог</a>
                        </li>
                        <li>
                            <a href="">О нас</a>
                        </li>
                        <li>
                            <a href="">Где нас найти?</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='header__right'>
                <input type="text" placeholder='Поиск по каталогу'/>
                <button>
                    <Image src="" alt="Корзина" />
                </button>
                <button>
                    <Image src="" alt="Настройки" />
                </button>
            </div>
        </header>
    );
}

export default Header;