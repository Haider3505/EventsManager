import { useRouteError } from "react-router-dom"
import PageContent from "../components/PageContent"

const ErrorPage = props => {

    const error = useRouteError()

    let title = "An Error Occurred"
    let message = "Something went wrong!"

    if (error.status === 500) {
        message = JSON.parse(error.data).message
    }

    if (error.status === 404) {
        title = 'Not Found!'
        message = "Could not find resource or page!"
    }

    return <PageContent title={title}>
        <p>{message}</p>
    </PageContent>
}

export default ErrorPage