import { Header } from "@/components/Header";
import { ScrollTransition } from "@/components/ScrollTransition";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <ScrollTransition />
      </main>
    </>
  );
}
