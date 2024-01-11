import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { Container } from "./style";
import { Footer } from "../../components/Footer";

export function App() {
  return (
    <Container>
      <Header />

      {/* outlet is main */}
      <Outlet />

      <Footer />
    </Container>
  );
}
