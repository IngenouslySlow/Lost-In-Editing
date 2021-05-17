import React from "react";
import styled from "styled-components";
const Nav = () => {
  return (
    <Navigation>
      <a id="logo" href="#">
        Lost In Editing
      </a>
      <ul>
        <li href="#">1. About Us</li>
        <li href="#">2. Our Work</li>
        <li href="#">3. Contact Us</li>
      </ul>
    </Navigation>
  );
};
const Navigation = styled.div`
  display: flex;
  margin: auto;
  justify-content: space-between;
  padding: 1rem 10rem;
  background: #282828;
  height: 10vh;
  color: white;
  align-items: center;

  #logo {
    text-decoration: none;
    color: white;
    font-family: "GT Walsheim Pro", sans-serif;
    font-size: 1.5rem;
    font-weight: 900;
  }
  ul {
    position: relative;
    list-style-type: none;
    display: flex;
  }
  li {
    padding: 1rem 2rem;
  }
`;
export default Nav;
