import { Header } from "@/components/Header";
import { ScrollTransition } from "@/components/ScrollTransition";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <ScrollTransition />
        <ExperienceTimeline />
      </main>
    </>
  );
}
