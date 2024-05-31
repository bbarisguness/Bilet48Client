import Wrapper from "@/components/layout/Wrapper";

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: 'test',
    description: 'test123'
  }
}

export default function Home({ params, searchParams }) {
  return (
    <>
      <Wrapper>
        test
      </Wrapper>
    </>
  );
}