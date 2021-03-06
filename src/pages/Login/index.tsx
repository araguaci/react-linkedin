import React, { useEffect } from 'react';

import { Container } from './styles';
import Header from './Header';
import Researchs from './Researchs';
import Learn from './Learn';
import Vacancy from './Vacancy';
import Connect from './Connect';
import Footer from './Footer';

const Login: React.FC = () => {
  useEffect(() => window.scrollTo(0, 0))
  return (
    <Container>
      <Header />
      <Researchs />
      <Vacancy />
      <Learn />
      <Connect />
      <Footer />
    </Container>
  )
};

export default Login;
