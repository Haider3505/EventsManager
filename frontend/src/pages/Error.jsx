import { useRouteError } from "react-router-dom"
import PageContent from "../components/PageContent"

const ErrorPage = props => {

    const error = useRouteError()
    console.log("llll=============", error)
    let title = "An Error Occurred"
    let message = "Something went wrong!"

    if (error.request.status === 500) {
        //  without using json utility function provided by react-router
        message = JSON.parse(error.data).message

        // using json utility function
        // message = error.data.message
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