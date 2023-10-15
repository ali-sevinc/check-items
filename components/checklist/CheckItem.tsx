import { useState, ChangeEvent } from "react";

import styled from "styled-components";

import { CheckItemType } from "./Check";

const StyledCheckItem = styled.li<{ $isItemChecked?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1rem;
  input {
    width: 18px;
    height: 18px;
  }
  button {
    padding: 0;
    border: none;
    background-color: transparent;
    color: ${(props) => (props?.$isItemChecked === true ? "green" : "red")};
  }

  color: ${(props) => (props?.$isItemChecked === true ? "green" : "red")};
`;

function CheckItem({
  checkItem,
  onRemoveItem,
  onToggleCheck,
}: {
  checkItem: CheckItemType;
  onRemoveItem: (id: string) => void;
  onToggleCheck: (id: string) => void;
}) {
  const [isChecked, setIsChecked] = useState<boolean>(checkItem.isChecked);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    onToggleCheck(checkItem.id);
    setIsChecked((prev) => !prev);
  }

  return (
    <StyledCheckItem $isItemChecked={isChecked}>
      <input onChange={handleChange} type="checkbox" checked={isChecked} />{" "}
      <span>{checkItem.text}</span>{" "}
      <button onClick={() => onRemoveItem(checkItem.id)}>
        {isChecked ? <>&#10003;</> : "X"}
      </button>
    </StyledCheckItem>
  );
}

export default CheckItem;
