import { Button } from "@mui/material";
import { useState } from "react";

export const ErrorMaker = () => {
  const [shouldError, setShouldError] = useState(false);

  const handleClick = () => {
    setShouldError(true);
  };

  if (shouldError) {
    throw new Error("Ops! Um erro de teste ocorreu intencionalmente.");
  }

  return (
    <Button variant="contained" onClick={handleClick}>
      Forçar Erro
    </Button>
  );
};
