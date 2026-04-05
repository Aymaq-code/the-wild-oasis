import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;

  ${({ type = "vertical" }) =>
    type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
    `}

  ${({ type = "virtical" }) =>
    type === "virtical" &&
    css`
      flex-direction: column;
      gap: "1.5rem";
    `}
`;

Row.defaultProps = {
  type: "virtical",
};

export default Row;
