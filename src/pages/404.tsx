import { Page404, Page404Link, PageWrapper } from "./Pages.styled"

import imagePage404 from '../assets/images/notFound.webp'

export const NotFound = () => {
    return (
        <PageWrapper>
            <Page404 $image={imagePage404}>
                Page Not Found
                <Page404Link to="/ToDoList/">go ToDo</Page404Link>
            </Page404>
        </PageWrapper>
    )
}