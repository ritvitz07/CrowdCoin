import React from "react";
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
// import Head from 'next/head';
import Header from './Header';

const someComponent = (props) => {
  return (
    <Container>
      <Header />
      {props.children}
    </Container>
  );
};
export default someComponent;
