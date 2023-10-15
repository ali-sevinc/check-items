import { useState } from "react";

import styled from "styled-components";

import CheckForm from "./CheckForm";
import CheckList from "./CheckList";
import CheckStats from "./CheckStats";

const StyledCheck = styled.section`
  position: relative;
  height: 100%;
`;

export type CheckItemType = { isChecked: boolean; text: string; id: string };

function Check() {
  const [checks, setChecks] = useState<CheckItemType[]>([]);

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

  return (
    <StyledCheck>
      <CheckForm onAddItem={handleAddItem} />
      <CheckList
        onToggleCheck={handleToggleCheck}
        onRemoveItem={handleRemoveItem}
        checkItems={checks}
      />
      <CheckStats checkItems={checks} />
    </StyledCheck>
  );
}

export default Check;
