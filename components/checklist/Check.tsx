import { useState, ChangeEvent } from "react";

import styled from "styled-components";

import CheckForm from "./CheckForm";
import CheckList from "./CheckList";
import CheckStats from "./CheckStats";

const StyledCheck = styled.section`
  position: relative;
  height: 100%;
`;

export type CheckItemType = {
  isChecked: boolean;
  text: string;
  id: string;
  amount: number;
};

function Check() {
  const [checks, setChecks] = useState<CheckItemType[]>([]);
  const [sort, setSort] = useState<string>("default");

  function handleAddItem(item: CheckItemType) {
    setChecks((prev) => [item, ...prev]);
  }
  function handleRemoveItem(id: string) {
    setChecks((prev) => prev.filter((item) => item.id !== id));
  }
  function handleToggleCheck(id: string) {
    setChecks((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  }

  function handleChangeSort(event: ChangeEvent<HTMLSelectElement>) {
    setSort(event.target.value);
  }

  function handleClearList() {
    setChecks([]);
  }

  let sortedData = [...checks];

  if (sort === "checked") {
    sortedData.sort((a, b) => Number(a.isChecked) - Number(b.isChecked));
  }
  if (sort === "a-to-z") {
    sortedData.sort((a, b) => a.text.localeCompare(b.text));
  }
  if (sort === "amount") {
    sortedData.sort((a, b) => a.amount - b.amount);
  }

  return (
    <StyledCheck>
      <CheckForm onAddItem={handleAddItem} />
      <CheckList
        onClear={handleClearList}
        onChange={handleChangeSort}
        sortValue={sort}
        onToggleCheck={handleToggleCheck}
        onRemoveItem={handleRemoveItem}
        checkItems={sortedData}
      />
      <CheckStats checkItems={checks} />
    </StyledCheck>
  );
}

export default Check;
