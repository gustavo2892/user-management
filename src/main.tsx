import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppModule } from "./app/AppModule";
import { SharedModule } from "./shared/SharedModule";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SharedModule>
      <AppModule />
    </SharedModule>
  </StrictMode>,
);
