import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'

export const Layout = ({ children }) => {
  console.log("Rendering Layout component");

  return (
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  )
}
