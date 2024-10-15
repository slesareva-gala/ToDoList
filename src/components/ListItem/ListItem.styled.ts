import styled from 'styled-components'

export const ListItemLink = styled.a<{ $done: boolean }>`
    text-decoration: none;
    padding: 10px;
    color: ${(props) => props.$done ? "green" : "red"};
`