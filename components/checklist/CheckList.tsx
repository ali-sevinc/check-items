import styled from "styled-components";

import CheckItem from "./CheckItem";
import { CheckItemType } from "./Check";

const StyledCheckList = styled.ul`
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 1rem auto;
  gap: 2rem;
  padding-bottom: 2rem;
  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

function CheckList({
  checkItems,
  onRemoveItem,
  onToggleCheck,
}: {
  checkItems: CheckItemType[];
  onRemoveItem: (id: string) => void;
  onToggleCheck: (id: string) => void;
}) {
  return (
    <StyledCheckList>
      {checkItems.map((item) => (
        <CheckItem
          onToggleCheck={onToggleCheck}
          onRemoveItem={onRemoveItem}
          key={item.id}
          checkItem={item}
        />
      ))}
    </StyledCheckList>
  );
}

export default CheckList;
