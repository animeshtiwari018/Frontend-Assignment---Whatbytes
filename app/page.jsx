import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <>
      <Header />

      <main className="mx-auto flex max-w-7xl gap-8 p-8">
        <Sidebar />
      </main>
    </>
  );
}
