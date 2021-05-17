import React from "react";
import styled from "styled-components";

//Router thing
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <Navigation>
      <Link id="logo" to="/">
        Lost In Editing
      </Link>
      <ul>
        <li>
          <Link to="/">1. About Us</Link>
        </li>
        <li>
          <Link to="/work">2. Our Work</Link>
        </li>
        <li>
          <Link to="/contact"> 3. Contact Us</Link>
        </li>
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
  a {
    text-decoration: none;
    color: white;
  }
  #logo {
    text-decoration: none;
    color: white;
    font-family: "GT Walsheim Pro", sans-serif;
    font-size: 1.5rem;
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
