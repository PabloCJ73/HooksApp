import { useCounter } from "../hooks/useCounter";

export const CounterWithCumstomHook = () => {
  const { counter, increment, reset, decrement } = useCounter();

  return (
    <>
      <h1>Counter With Hook: {counter}</h1>
      <br />
      <button onClick={increment(2)} className="btn btn-primary">
        +1
      </button>
      <button onClick={reset} className="btn btn-primary">
        Reset
      </button>
      <button onClick={decrement(2)} className="btn btn-primary">
        -1
      </button>
    </>
  );
};
