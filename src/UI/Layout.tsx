import { Outlet } from "react-router-dom";
import { Footer, Header, Menu } from "../components";

export function Layout() {
  return (
    <>
      <Header />
      <main className="main main-container">
        <h1 className="visually-hidden" style={{ display: "none" }}>
          React Admin Panel
        </h1>
        <Menu />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
