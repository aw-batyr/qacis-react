import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components/layout";

export default function App() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />

      <div className="flex-auto">
        <Outlet />
      </div>

      <Footer />
    </main>
  );
}
