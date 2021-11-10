import { GlobalOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { MouseEvent } from "react";

const MyIcon = styled(GlobalOutlined)`
  font-size: 30px;
  color: red;
`;

export default function LibraryIconPage() {
  function onClickMyIcon(event: MouseEvent<HTMLSpanElement>) {
    // router.query.boardId
  }

  return <MyIcon id="123" onClick={onClickMyIcon} />;
}
