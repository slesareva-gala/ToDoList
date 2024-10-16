import styled from 'styled-components'

export const ListItemLink = styled.a<{ $done: boolean }>`
    text-decoration: none;
    font-size: 1rem;
    color: ${(props) => props.$done ? props.theme.colors.colorDone : props.theme.colors.colorNotDone};
`