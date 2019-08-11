import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  display: block;
  font-size: 2rem;
  color: black;
  background-color: white;
  border-style: solid;
  border-width: 2px;
  border-color: #727272 #ddd #ddd #727272;
  border-radius: 5px;
  text-decoration: none;
  height: 50px;
  line-height: 50px;
  padding: 0 10px;
  text-align: center;
  margin: 10px 0;
  &:hover {
    border-color: #ddd #727272 #727272 #ddd;
  }
`;

export default StyledLink;
