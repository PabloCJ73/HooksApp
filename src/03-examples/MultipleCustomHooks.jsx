import React from "react";
import { useFetch } from "../hooks";

export const MultipleCustomHooks = () => {
  const { data, hasError, isLoading } = useFetch();

  return (
    <>
      <h1>Informacion</h1>
      <hr />
      {isLoading && <p>Cargando...</p>}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};
