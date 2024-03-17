import CardFeatured from "@/components/_ui/_main/CardFeatured";
import CardNews from "@/components/_ui/_main/CardNews";

export default async function Home() {
  return (
    <main>
      <div className="flex flex-col md:flex md:flex-row gap-4">
        <CardFeatured />
        <CardNews />
      </div>
    </main>
  );
}
