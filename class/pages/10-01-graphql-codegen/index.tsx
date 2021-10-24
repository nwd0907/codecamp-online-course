import { useMutation, gql, useQuery } from "@apollo/client";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../src/commons/types/generated/types";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      number
    }
  }
`;

const FETCH_BOARD = gql``;

export default function GraphqlCodegenPage() {
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    { variables: { boardId: "1111" } }
  );
  console.log(data);

  async function onClickGraphqlApi() {
    await createBoard({
      variables: {
        createBoardInput: {
          writer: "철수",
          contents: "내용",
          password: "1234",
          title: "제목",
        },
      },
    });
    // result.data.createBoard;
  }

  return (
    <>
      <button onClick={onClickGraphqlApi}>
        Graphql API 요청!!(게시물 등록하기!!!)
      </button>
    </>
  );
}
