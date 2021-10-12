import {useMutation, gql} from '@apollo/client'
import { useState } from 'react'

const CREATE_PRODUCT = gql`
    mutation {
        createProduct(seller: "철수", createProductInput: {
            name: "손목시계",
            detail: "손목시계팝니다~",
            price: 500
        }){
            _id
        }
    }
`

export default function GraphqlMutationProduct1Page(){
    const [myMessage, setMyMessage] = useState("")
    const [createProduct] = useMutation(CREATE_PRODUCT)

    async function onClickGraphqlApi(){
        const result = await createProduct()
        // console.log(result.data.createProduct.message)
        setMyMessage(result.data.createProduct._id)
    }

    return (
        <>
            <div>상품 등록하기!!</div>
            <div>결과: {myMessage}</div>
            <button onClick={onClickGraphqlApi}>상품 등록API 요청하기!!</button>
        </>
    )

}