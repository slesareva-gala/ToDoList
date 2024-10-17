import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const ListItemLink = styled(NavLink) <{ $done: boolean }>`
    text-decoration: none;
    font-size: 1rem;
    color: ${(props) => props.$done ? props.theme.colors.colorDone : props.theme.colors.colorNotDone};
`