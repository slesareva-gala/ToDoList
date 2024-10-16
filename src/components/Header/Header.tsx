import { useDispatch } from 'react-redux'
import { HeaderNavLinks, HeaderNavLink, HeaderWrapper, HeaderTogle, HeaderTogleButton } from './Header.styled'
import { toggleThemeAction } from '../../feature/themeList'

export const Header = () => {
    const dispatch = useDispatch()
    return (
        <HeaderWrapper>
            <HeaderNavLinks>
                <HeaderNavLink to="/">ToDo</HeaderNavLink>
                <HeaderNavLink to="/list">List</HeaderNavLink>
                <HeaderTogle>
                    <HeaderTogleButton onClick={() => dispatch(toggleThemeAction())}></HeaderTogleButton>
                </HeaderTogle>
            </HeaderNavLinks>
        </HeaderWrapper>
    )
}
