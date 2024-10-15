import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px; 
`
export const TextH1 = styled.h1``

export const Page404 = styled(PageWrapper) <{ $image: string }>`
    padding: 0; 

    justify-content: space-between;
    width: 75vh;
    height: 75vh;
    background-image: url(${(props) => props.$image});
    background-size: cover;
              
    font-size: 6vh;
`
export const Page404Link = styled(Link)`
    font-size: 5vh;
`