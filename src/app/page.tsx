import CardInHigh from "@/components/CardInHigh";
import CardNews from "@/components/CardNews";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col md:flex md:flex-row gap-4">
        <CardInHigh />
        <CardNews />
      </div>
    </main>
  );
}
