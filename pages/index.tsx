import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import LayoutContainer from '../components/LayoutContainer'

const StyledDiv = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
`

const Home: NextPage = () => {
  return (
    <LayoutContainer>
      <StyledDiv>Hello World</StyledDiv>
    </LayoutContainer>
  )
}

export default Home
