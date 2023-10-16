import styled from "styled-components";

import { CheckItemType } from "./Check";

const StyledCheckStats = styled.div`
  position: absolute;
  background-color: var(--color-orange-300);
  width: 100%;
  left: 0;
  bottom: 0;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 900px) {
    font-size: 1.2rem;
  }
`;

const Span = styled.span`
  font-weight: bold;
  font-size: 1.6rem;
`;

function CheckStats({ checkItems }: { checkItems: CheckItemType[] }) {
  const itemNum = checkItems?.length;
  const checedNum = checkItems?.filter(
    (item) => item.isChecked === true
  )?.length;

  let checkedPercent = 0;
  if (itemNum || checedNum)
    checkedPercent = Math.floor((checedNum / itemNum) * 100);

  return (
    <StyledCheckStats>
      {itemNum === 0 && <p>No check item found.</p>}
      {itemNum > 0 &&
        (checkedPercent === 100 ? (
          <p>All items checked.</p>
        ) : (
          <p>
            <Span>{checedNum}</Span> item(s) of <Span>{itemNum}</Span> are
            checked (<Span>{checkedPercent}%</Span>)
          </p>
        ))}
    </StyledCheckStats>
  );
}

export default CheckStats;
