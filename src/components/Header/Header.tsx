import { HeaderNavLinks, HeaderNavLink, HeaderWrapper } from './Header.styled'

export const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderNavLinks>
                <HeaderNavLink to="/">ToDo</HeaderNavLink>
                <HeaderNavLink to="/list">List</HeaderNavLink>
            </HeaderNavLinks>
        </HeaderWrapper>
    )
}
