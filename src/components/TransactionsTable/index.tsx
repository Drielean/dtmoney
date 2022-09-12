import { api } from "../../services/api";
import { useEffect } from "react";
import { Container } from "./styles";

export function TransactionsTable() {
  /*criando uma api fake */
  useEffect(() => {
    api
      .get("transactions") //assim a requisicao fica mais simples, sem a necessidade de chamar toda vez a url quando utilizamos o fetch e sem a necessidade de ficar convertendo as respostas em json.
      .then((response) => console.log(response.data)); //assim conseguimos ver a listagem de dados que esta dentro de transactions.
  }, []);

  return (
    <Container>
      <script>
        /* o table ja poderia ser o container porem caso queira adicionar mais
        alguma coisa nao sera possivel, entao por isso colocar o container e o
        table */
      </script>

      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>

          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$1.100</td>
            <td>Casa</td>
            <td>17/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
