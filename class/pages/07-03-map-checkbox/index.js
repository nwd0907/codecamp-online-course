import {gql, useMutation, useQuery} from '@apollo/client'
import styled from '@emotion/styled'
import { getMyDate } from '../../src/commons/libraries/utils'

const FETCH_BOARDS = gql`
    query fetchBoards{
        fetchBoards{
            number
            writer
            title
            createdAt
        }
    }
`

const DELETE_BOARD = gql`
    mutation deleteBoard($number: Int){
        deleteBoard(number: $number){
            message
        }
    }
`

const Column = styled.span`
    margin: 30px;
`

export default function MapCheckboxPage(){
    const { data } = useQuery(FETCH_BOARDS)
    const [deleteBoard] = useMutation(DELETE_BOARD)



    function onClickDelete(event){
        const result = confirm("데이터를 삭제할까요??")
        if(result === true){
            deleteBoard({
                variables: {
                    number: Number(event.target.id)
                },
                refetchQueries: [{query: FETCH_BOARDS}]
            })
        }
    }

    return (
        <div>
            {data?.fetchBoards.map((el) => (
                <div key={el.number}>
                    <Column>
                        <input type="checkbox" onClick={onClickDelete} id={el.number} />
                    </Column>
                    <Column>{el.number}</Column>
                    <Column>{el.writer}</Column>
                    <Column>{el.title}</Column>
                    <Column>{getMyDate(el.createdAt) }</Column>
                </div>
            ))}
        </div>
    )
}