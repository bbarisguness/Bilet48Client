import Hero6 from "@/components/hero/hero-6";

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: "Bilet 48",
    description: "Bilet 48 description",
  };
}

export default function Home({ params, searchParams }) {
  return (
    <Hero6 />
  )
}
