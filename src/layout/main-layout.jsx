import { Footer } from "./footer";
import { Header } from "./header";
export const MainLayout = ({ children }) => {
  return (
    <>
    <header>
      <Header/>
    </header>
      <main>
        <div className="container">{children}</div>
      </main>
      <footer>
        <div className="container">
          <Footer />
        </div>
      </footer>
    </>
  );
};
