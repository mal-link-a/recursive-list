import styled from "styled-components";

export const List = styled.div<{ $isHollow: boolean; $color: string }>`
  margin: 10px;
  display: flex;
  flex-direction: column;
  display: ${(props) => (props.$isHollow ? "none" : "block")};
  border: 1px solid ${(props) => props.$color};
`;
