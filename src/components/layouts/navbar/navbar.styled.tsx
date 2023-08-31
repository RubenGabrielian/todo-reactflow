import styled from "styled-components";

export const StyledNavbar = styled.nav`
  padding: 30px 0;
  box-shadow: 0 4px 9px rgba(0, 0, 0, 0.09);
  margin-bottom: 20px;
  background: white;
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    li {
      padding: 0 15px 0 0;
      a {
        font-size: 17px;
        font-weight: 600;
        color: #555555;
      }
    }
  }
`;
