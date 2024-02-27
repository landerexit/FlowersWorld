export const metadata = {
    title: "Страница не существует - Мир Цветов",
    description: `Магазин "Мир цветов" в г. Астрахань`,
};

function Custom404() {
    return (
        <div className="not-found">
            <h1>
                <span>ОШИБКА</span>404
            </h1>
            <p>Такой страницы не существует</p>
        </div>
    );
}

export default Custom404;