import React from "react";
import Card from "./Card";

export interface Result {
  id: number;
  original_title: string;
  overview: string;
  backdrop_path?: string;
  poster_path?: string;
  vote_count: string;
  title?: string;
  name?: string;
  release_date?: string;
  first_air_date?: string;
}

export interface ResultsProps {
  results: Result[];
}
export const Results = ({ results }: ResultsProps) => {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
      {results.map((result) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
};
