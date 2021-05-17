import { Header } from "./header";
import { Footer } from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      <h1>Layout</h1>
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export { Layout };
