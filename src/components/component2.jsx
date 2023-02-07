import { useState } from "react";

export function Component2() {
  const [count, setCount] = useState(0)

  return (
    <div className="placeholder-projects">
      <h1>You have currently counted to {count}</h1>
      <button onClick={() => setCount((oldCount) => oldCount + 1)}>
        Add One
      </button>
      <button onClick={() => setCount((oldCount) => oldCount * 2)}>
        Double
      </button>
      <button onClick={() => setCount((oldCount) => oldCount - 10)}>
        Subtract ten
      </button>
      <button onClick={() => setCount((oldCount) => Math.sqrt(oldCount))}>
        Square Root
      </button>
      <button onClick={() => setCount((oldCount) => Math.floor(oldCount))}>
        Floor
      </button>
      <button onClick={() => setCount((oldCount) => Math.PI)}>Pi</button>
      <button onClick={() => setCount((oldCount) => oldCount ** 2)}>Exponential</button>
    </div>
  );
}
