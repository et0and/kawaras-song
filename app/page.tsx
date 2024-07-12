import { Fragment } from "react";
import { toWords } from "number-to-words";

export default async function Home() {
  const numbers = Array.from({ length: 1000000 }, (_, i) => i + 1);

  return (
    <main className="container mx-auto py-8 leading-10 text-center">
      {numbers.map((num) => (
        <Fragment key={num}>
          <p className="mb-1">{toWords(num)}</p>
        </Fragment>
      ))}
    </main>
  );
}
