import CardInHigh from "@/components/_ui/_main/CardFeatured";
import CardNews from "@/components/_ui/_main/CardNews";

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
