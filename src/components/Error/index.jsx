import { useRouteError } from "react-router-dom";

export const Error = () => {
  const error = useRouteError();

  return (
    <div>
      <h1>Ops!!!</h1>
      <h2>Something went wrong!</h2>

      <h3>
        {error.status}: {error.statusText}
      </h3>
    </div>
  );
};
