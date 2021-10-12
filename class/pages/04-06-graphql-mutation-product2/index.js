import {useMutation, gql} from '@apollo/client'
import { useState } from 'react'

const CREATE_PRODUCT = gql`
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!){   
        createProduct(seller: $seller, createProductInput: $createProductInput){
            _id
        }
    }
`

export default function GraphqlMutationProduct2Page(){
    const [myMessage, setMyMessage] = useState("")
    const [createProduct] = useMutation(CREATE_PRODUCT)

    async function onClickGraphqlApi(){
        const result = await createProduct({
            variables: {
                seller: "영희",
                createProductInput: {
                    name: "손목시계",
                    detail: "손목시계 팝니다~",
                    price: 1000
                }
            }
        })
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