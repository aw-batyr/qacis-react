import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components/layout";
import LanguageSync from "./lang-sync";

export default function App() {
  return (
    <main className="flex flex-col min-h-screen">
      <LanguageSync />
      <Header />

      <div className="flex-auto">
        <Outlet />
      </div>

      <Footer />
    </main>
  );
}
