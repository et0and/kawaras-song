import { FC } from "react";
import { toWords } from "number-to-words";

const Home: FC = () => {
  const numbers = Array.from({ length: 1000000 }, (_, i) => i + 1);

  return (
    <main className="container mx-auto py-8 leading-10 text-center">
      {numbers.map((num) => (
        <p key={num} className="mb-1">
          {toWords(num)}
        </p>
      ))}
    </main>
  );
};

export default Home;
