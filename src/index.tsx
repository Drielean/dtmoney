import React from "react";
import ReactDOM from "react-dom/client";
import { createServer } from "miragejs";
import { App } from "./App";

createServer({
  routes() {
    this.namespace = "api"; // para dizer que todas as chamadas estaram o partir desse ponto.

    //para cada rota, quando ouver uma requisicao de busca, ele vai retornar alguma coisa
    this.get("/transactions", () => {
      return [
        {
          id: 1,
          title: "Transaction 1",
          amount: 400,
          type: "deposit",
          category: "Food",
          createdAt: new Date(),
        },
      ];
    });
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
