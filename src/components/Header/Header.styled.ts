import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderWrapper = styled.header`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 50px;
    background-color: #4682b4;
    display: flex;
    align-items: center;
`
export const HeaderNavLinks = styled.div`
    position: relative;
    max-width: 97%;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const HeaderNavLink = styled(NavLink)`
    text-decoration: none;
    padding: 10px;
    color: #fff;

    &.active {
        color: yellow;
        text-decoration: underline;
    }
`
export const HeaderTogle = styled.div`
    position: absolute;
    right: 0;
    top: 50%;    
    transform: translateY(-50%);
`

export const HeaderTogleButton = styled.button``