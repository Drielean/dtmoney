import styled from "styled-components";

export const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  //repeat serve para dizer que 'e para repetir x vez.
  gap: 2rem; // 'e o espacamento entre os itens.
  margin-top: -10rem; //para colocar o summary mais para cima.

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block; //pq por padrao no strong 'e inline e faz com que o margin-top nao funcione.
      margin-top: 1rem;
      font-size: 2rem; //para aumentar o tamanho da fonte estipulada anteriormente.
      font-weight: 500; //tamanho da fonte.
      line-height: 3rem; //para oculpar mais espaco.
    }

    //para dizer que quando a div que tiver essa classe ela tera uma cor de fundo diferente.
    &.higlight-brackground {
      background: var(--green);
      color: #fff;
    }
  }
`;
