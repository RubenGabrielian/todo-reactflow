import styled from "styled-components";

export const StyledCreatorTodo = styled.div`
  .create-to-do-wrapper {
    display: flex;
    flex-direction: column;
    background: white;
    border: 1px solid #ddd;
    padding: 12px;
    border-radius: 12px;
    .todo {
      width: 100%;
      position: relative;
      h3 {
        border-bottom: 1px solid #ddd;
        padding-bottom: 5px;
      }
      p {
        padding: 5px 0 12px;
      }
      .delete-todo {
        background: transparent;
        outline: none;
        border: none;
        position: absolute;
        top: 0;
        right: 0;
        cursor: pointer;
        svg {
          font-size: 18px;
          path {
            fill: #9f0000;
          }
        }
      }
    }
  }
`;
