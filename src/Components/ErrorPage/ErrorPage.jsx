import { NavLink } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center my-12 space-y-3">
            <h4>Opps!!</h4>
            <h5>Page Not Found</h5>
            <NavLink to="/">
            <button className="btn btn-outline btn-sm	 btn-secondary my-4">Go Back To Home Page</button>
            </NavLink>
        </div>
    );
};

export default ErrorPage;