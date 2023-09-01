import styled from "styled-components";

export const StyledBoard = styled.div`
  width: 100%;
  height: 100%;
  max-height: calc(100vh - 175px);

  .board-wrapper {
    height: 100%;
    border: 1px solid #ddd;
    border-radius: 12px;
    box-shadow: -1px -1px 21px -3px rgb(153 153 153 / 9%);
    background: white;
    position: relative;
  }
`;
