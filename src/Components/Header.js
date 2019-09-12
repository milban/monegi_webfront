import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Header = styled.header`
  width: 100%;
  padding: 1rem 2rem;
  border-bottom: 1px solid #d2dae2;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.span`
  font-size: 3rem;
`

const ButtonContainer = styled.div``

export default () => (
  <Header>
    <Link to="/">
      <Title>Monegi</Title>
    </Link>
    <ButtonContainer>
      <Link to="/addplaylist">Add Playlist</Link>
    </ButtonContainer>
  </Header>
)
