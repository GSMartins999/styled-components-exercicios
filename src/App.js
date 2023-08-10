import React from "react";
import CardVideo from "./Componentes/CardVideo";
import styled from "styled-components";

export default function App() {
  const card1 = {
    titulo: "Título do vídeo",
    imagemDoVideo: "https://picsum.photos/400/400?a=1",
    textoAlternativo: "descrição da imagem"
  };

const Body = styled.body`
  width: 100%;
  padding: 0;
  margin: 0;
`

const TelaInteira = styled.body`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const Cabecalho = styled.header`
  background-color: orange;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  height: 10%;
`

const Main = styled.main`
  min-height: 80%;
  display: flex;
`

const Nav = styled.nav`
  flex-basis: 200px;
  border-right-style: solid;
  border-right-width: thin;
`

const Li = styled.li`
  list-style-type: none;
`

const PainelDeVideos = styled.section`
  flex-grow: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  row-gap: 10px;
  column-gap: 10px;
  margin: 10px;
`

const Footer = styled.footer`
  background: #333b3e;
  color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  padding: 0 10px;

`
const H4 = styled.h4`
  margin-left: 20px;

`

  return (
    <Body>
      <TelaInteira>
        <Cabecalho>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </Cabecalho>

        <Main>
          <Nav>
            <ul>
              <Li>Início</Li>
              <Li >Em alta</Li>
              <Li>Inscrições</Li>
              <hr />
              <Li>Originais</Li>
              <Li>Histórico</Li>
            </ul>
          </Nav>

          <PainelDeVideos>
            <CardVideo
              image1={card1.imagemDoVideo}
              titulo={card1.titulo}
              textoAlternativo={card1.textoAlternativo}
            />
          </PainelDeVideos>
        </Main>

        <Footer>
          <H4>Oi! Eu moro no footer!</H4>
        </Footer>
      </TelaInteira>
    </Body>
  );
}