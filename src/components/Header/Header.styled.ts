import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderWrapper = styled.header`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 50px;
    background-color: ${(props) => props.theme.colors.backgroundPrimary};
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

export const HeaderTogleButton = styled.button`
    display: inline-block;
    position: relative;
	padding: 1rem 2rem;
    border: 0;    
    border-radius: 25px;
    overflow: hidden;    
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.backgroundPrimary};
		  
	&:before {
		content: '${(props) => props.theme.name === 'light' ? '🌞' : '🌙'}'; 
        display: flex;        
        align-items: center;
        justify-content: right;
		position: absolute;
		left: 0;
        top: 0;
		width: 100%;
		height: 100%;		
        border: 0;
		border-radius: 25px;
        font-size: 1.5rem;
	}
	&:after {
		content: '';
        display: flex;        
        align-items: center;
        justify-content: right;
		position: absolute;
		left: 0;
        top: 0;
		width: 0%;
		height: 100%;	
        border: 0;	
		border-radius: 25px;
        font-size: 1.5rem;      
		
		background-color: ${(props) => props.theme.colors.backgroundPrimaryInvert};
	    transition: width 1s;		
		
	}
	&:hover:after {
        content: '${(props) => props.theme.name === 'light' ? '🌙' : '🌞'}';    
        width: 100%;
   	}
`