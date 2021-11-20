import { useMutation, gql } from "@apollo/client";
import { ChangeEvent, useState } from "react";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      number
    }
  }
`;

export default function GraphqlMutationBoard3InputsSpreadPage() {
  const [myInputs, setMyInputs] = useState({
    myWriter: "",
    myTitle: "",
    myContents: "",
  });
  const [myMessage, setMyMessage] = useState("");
  const [createBoard] = useMutation(CREATE_BOARD);

  function onChangeMyInputs(event: ChangeEvent<HTMLInputElement>) {
    setMyInputs({
      ...myInputs,
      [event.target.id]: event.target.value,
    });
  }

  async function onClickGraphqlApi() {
    const result = await createBoard({
      variables: { ...myInputs },
    });
    setMyMessage(result.data.createBoard.number);
  }

  return (
    <>
      <div>Graphql 요청하기!!!</div>
      <div>결과: {myMessage}</div>
      작성자: <input id="myWriter" type="text" onChange={onChangeMyInputs} />
      <br />
      제목: <input id="myTitle" type="text" onChange={onChangeMyInputs} />
      <br />
      내용: <input id="myContents" type="text" onChange={onChangeMyInputs} />
      <br />
      <button onClick={onClickGraphqlApi}>
        Graphql API 요청!!(게시물 등록하기!!!)
      </button>
    </>
  );
}
