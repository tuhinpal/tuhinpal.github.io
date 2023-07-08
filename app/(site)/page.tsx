import Hero from "./components/Hero";
import Works from "./components/Works";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Hero />

      <Works />
    </div>
  );
}
