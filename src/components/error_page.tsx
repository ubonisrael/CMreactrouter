import { useRouteError } from "react-router-dom";
import NavigateButtons from "./navigate_buttons";

const ErrorPage = () => {
    const error =  useRouteError() as Error

    return (
        <>
        <NavigateButtons />
        <div id="error-page" className="w-full h-full flex flex-col items-center justify-center gap-1">
            <h1>Oops!</h1>
            <p className="text-center">Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.message}</i>
            </p>
        </div>
        </>
    )
}

export default ErrorPage