import React from "react";

interface Result {
  id: number;
  original_title: string;
}

interface ResultsProps {
  results: Result[];
}
export const Results = ({ results }: ResultsProps) => {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
      {results.map((result) => (
        // <Card key={result.id} result={result} />
        <div key={result.id}>
          <h2>{result.original_title}</h2>
        </div>
      ))}
    </div>
  );
};
