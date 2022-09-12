import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px; //nlargura maxima do segundo container.
  margin: 0 auto; // deixar sempre centralizado.

  padding: 2rem 1rem 12rem; // sendo utilizado rem para melhor desempenho junto com o % estipulado no inicio da estilizacao.
  display: flex;
  align-items: center;
  justify-content: space-between; //espaco entre a logo e botao.

  button {
    font-size: 1rem;
    color: #fff;
    background: var(--blue-light);
    border: 0; //como o botao ja vem com border padrao, assim 'e retirado essa borda.
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s; // serve para quando toda vez que o filter for acionado faz esse transition mais leve.

    &:hover {
      filter: brightness(0.9);
      //serve para rescurecer o button quando passar o mouse por cima.
    }
  }
`;
