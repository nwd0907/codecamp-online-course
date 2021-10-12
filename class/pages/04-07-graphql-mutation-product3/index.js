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
    const [mySeller, setMySeller] = useState("")
    const [myProductName, setMyProductName] = useState("")
    const [myProductDetail, setMyProductDetail] = useState("")
    const [myProductPrice, setMyProductPrice] = useState(0)
    const [myMessage, setMyMessage] = useState("")
    const [createProduct] = useMutation(CREATE_PRODUCT)

    function onChangeSeller(event){
        setMySeller(event.target.value)
    }

    function onChangeProductName(event){
        setMyProductName(event.target.value)
    }

    function onChangeProductDetail(event){
        setMyProductDetail(event.target.value)
    }

    function onChangeProductPrice(event){
        setMyProductPrice(Number(event.target.value))
    }

    async function onClickGraphqlApi(){
        const result = await createProduct({
            variables: {
                seller: mySeller,
                createProductInput: {
                    name: myProductName,
                    detail: myProductDetail,
                    price: myProductPrice
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
            판매자: <input type="text" onChange={onChangeSeller}/><br />
            상품명: <input type="text" onChange={onChangeProductName}/><br />
            상품내용: <textarea onChange={onChangeProductDetail}/><br />
            상품가격: <input type="text" onChange={onChangeProductPrice}/><br />
            <button onClick={onClickGraphqlApi}>상품 등록API 요청하기!!</button>
        </>
    )

}