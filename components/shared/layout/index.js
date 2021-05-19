import { Header } from "./header";
import { Footer } from "./footer";
import Container from "@material-ui/core/Container";
import styles from './layout.module.css'



const Layout = ({ children }) => {

  return (
    <>
      <Container>
        <h1 className={styles.center}>Layout</h1>
        <div>
          <Header />
          {children}
          <Footer />
        </div>
      </Container>
    </>
  );
};

export { Layout };
