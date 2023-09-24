import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex justify-center ">
           <div className="p-40">
            <h2 className="font-bold text-2xl text-center">Oops!!!</h2>
            <button className="btn capitalize"><Link to='/'>Go Back TO Home</Link></button>
           </div>
        </div>
    );
};

export default ErrorPage;