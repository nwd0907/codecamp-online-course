import styled from '@emotion/styled'

interface IMyButtonProps {
    isActive: boolean
}
export const MyButton = styled.button`
    background-color:  ${(props: IMyButtonProps) => props.isActive === true ? "yellow" : "gray" } ;
`