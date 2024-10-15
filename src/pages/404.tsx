import { Link } from "react-router-dom"

export const NotFound = () => {
    return (
        <div className="container">
            <div className="notFound">
                Not Found
                <Link to="/" className="toHome">go ToDo</Link>
            </div>



        </div>
    )
}