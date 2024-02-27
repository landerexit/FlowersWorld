import "@/app/ui/styles/global.sass";
import Header from "@/app/ui/header";
import Footer from "./ui/footer";

export const metadata = {
    title: "Мир Цветов",
    description: `Магазин "Мир цветов" в г. Астрахань`,
};

export default function RootLayout({ children }) {
    return (
        <html lang="ru">
            <body>
                <Header />
                <main className="page max-width">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
