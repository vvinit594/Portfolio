import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { ResultsDelivered } from "@/components/results-delivered/ResultsDelivered";

export const metadata: Metadata = {
  title: "Results Delivered | CodeWithVini",
  description:
    "Client success stories and project outcomes — real business problems solved with scalable software systems.",
  openGraph: {
    title: "Results Delivered | CodeWithVini",
    description:
      "Client success stories and project outcomes — real business problems solved with scalable software systems.",
    url: "https://www.codewithvini.tech/results-delivered",
    type: "website",
  },
};

export default function ResultsDeliveredPage() {
  return (
    <>
      <Header />
      <main>
        <ResultsDelivered />
      </main>
    </>
  );
}
