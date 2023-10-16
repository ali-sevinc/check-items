import styled from "styled-components";
import { ChangeEvent } from "react";

import CheckItem from "./CheckItem";
import { CheckItemType } from "./Check";

const StyledCheckList = styled.ul`
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 1rem auto;
  gap: 2rem;
  padding-bottom: 8rem;
  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const Sort = styled.div`
  width: 100%;
  text-align: center;
  margin: 0 auto;
  padding: 0.5rem 0;
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 1rem;
  button {
    border: 1px solid black;
    background-color: white;

    height: 43px;
    padding: 0.2rem 0.5rem;
    transition: background-color 0.2s;
  }
  button:hover {
    background-color: var(--color-orange-500);
  }
`;

function CheckList({
  checkItems,
  onRemoveItem,
  onToggleCheck,
  onChange,
  sortValue,
  onClear,
}: {
  checkItems: CheckItemType[];
  onRemoveItem: (id: string) => void;
  onToggleCheck: (id: string) => void;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  sortValue: string;
  onClear: () => void;
}) {
  return (
    <div>
      <Sort>
        <div>
          <label>Sort by: </label>
          <select value={sortValue} onChange={onChange}>
            <option value="default">Default</option>
            <option value="packed">Packed</option>
            <option value="amount">Amount</option>
            <option value="a-to-z">A to Z</option>
          </select>
        </div>
        <button onClick={onClear}>Clear list</button>
      </Sort>
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
    </div>
  );
}

export default CheckList;
