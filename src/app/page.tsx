import { Results } from "@/components/Results";

const API_KEY = process.env.API_KEY;

interface HomeProps {
  searchParams: Record<string, string | undefined>;
}

export default async function Home({ searchParams }: HomeProps) {
  const genre = searchParams.genre || "fetchTrending";

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3${
        genre === "fetchTopRated" ? "/movie/top_rated" : "/trending/all/week"
      }?api_key=${API_KEY}&language=en-US&page=1`,
      { next: { revalidate: 10000 } } //update the data automatically every 10 seconds
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    const results = data.results;
    return (
      <div>
        <Results results={results} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
