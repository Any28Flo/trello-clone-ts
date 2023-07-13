import styled from "styled-components";

export const ColumnContainer = styled.div`
  background-color: var(--secondary);
  width: 300px;
  min-height: 40px;
  margin-right: 20px;
  border-radius : 3px;
  padding: 8px 8px;
  flex-grow: 0
`;

export const ColumnTitle = styled.div`
    padding: 6px 16px 12px;
    font-weight: bold;
`;

export const CardContainer = styled.div`
  background-color: var(--tertiary);
  cursor: pointer;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  max-width: 300px;
  border-radius: 3px;
  box-shadow: var(--gray-400) 0px 1px 0px 0px;
  
`;