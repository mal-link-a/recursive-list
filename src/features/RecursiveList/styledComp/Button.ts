import styled from "styled-components";

export const Button = styled.button<{ $hide?: boolean }>`
  display: ${(props) => (props.$hide ? "none" : "block")};
`;
