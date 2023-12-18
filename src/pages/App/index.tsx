import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { Container } from "./style";

export function App() {
  return (
    <Container>
      <Header />

      <main>
        <Outlet />
      </main>
    </Container>
  );
}
