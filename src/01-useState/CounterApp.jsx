import { useState } from "react";

// Ejemplo de como se utiliza useState
export const CounterApp = () => {
  // Declaracion de useState
  //   Ejemplo 1 con un valor
  //   const [counter, setCounter] = useState(10);
  // Ejemplo 2 con un objeto
  //   const [{ counter1, counter2, counter3 }, setCounter] = useState({
  //     counter1: 10,
  //     counter2: 20,
  //     counter3: 30,
  //   });
  // Ejemplo 3
  const [state, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  //   Ejemplo 3
  const { counter1, counter2, counter3 } = state;

  return (
    <>
      {/* Se muestra el valor */}
      {/* Ejemoplo 1 */}
      {/* <h1>Counter: {counter}</h1> */}
      {/* Ejemplo 2 */}
      <h1>Counter1: {counter1}</h1>
      <h1>Counter2: {counter2}</h1>
      <h1>Counter3: {counter3}</h1>

      <br />

      {/* Se llama a la funcion que modifica el valor */}
      {/* Ejemplo 1 */}
      {/* <button onClick={() => setCounter(counter + 1)}>+1</button> */}
      {/* Ejemplo 2 */}
      {/* <button
        onClick={() =>
          setCounter({
            counter1: counter1 + 1,
            counter2: counter2,
            counter3: counter3,
          })
        }
      >
        +1
      </button> */}

      {/* Ejemplo 3 */}
      <button
        onClick={() =>
          setCounter({
            ...state,
            counter1: counter1 + 1,
          })
        }
      >
        +1
      </button>
    </>
  );
};
