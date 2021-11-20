import { gql, useQuery } from "@apollo/client";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
    }
  }
`;

export default function EventBubblingPage() {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS,
    { variables: { page: 1 } }
  );

  function onClickMoveToDetail(event: MouseEvent<HTMLDivElement>) {
    console.log("상세페이지로 이동합니다!!");
    // console.log((event.target as Element).id);
    console.log((event.currentTarget as Element).id);
  }

  return (
    <>
      <div>페이지네이션 연습!!</div>
      <div>
        {data?.fetchBoards.map((el) => (
          <div
            key={el._id}
            id="aaa"
            onClick={onClickMoveToDetail}
            style={{ height: "200px" }}
          >
            <span>{el.title}</span>
            <span>{el.writer}</span>
          </div>
        ))}
      </div>
    </>
  );
}
