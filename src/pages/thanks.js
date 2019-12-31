import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

const Div = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Thanks = () => (
  <Div>
    <h1>Thanks, your message has been sent.</h1>
    <Link to="/about">OK</Link>
  </Div>
);

export default Thanks;
