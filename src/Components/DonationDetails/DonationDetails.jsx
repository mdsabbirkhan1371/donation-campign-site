import { useLoaderData, useParams } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveToLocalStorage } from "../../Utilities/localstorage";


const DonationDetails = () => {
    const donations = useLoaderData();
    
    const {id}=useParams()
    const idInt = parseInt(id)

    const donation = donations.find(donation=>donation.id===idInt)
    
    const handleDonate=(id)=>{
        toast("Donate SuccessFull")
        saveToLocalStorage(id)
    }

    return (
        <div>
            
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                    <figure>
                        <img className="w-full" src={donation.img_url} alt="Shoes" />
                    </figure>
                    <div className="card-actions justify-start">
                        <button onClick={()=>handleDonate(idInt)} className="btn btn-error m-7">Donate {donation.price}</button>
                    </div>
            </div>
            <div className="card-body  text-black">
                         <h2 className="card-title font-bold">{donation.title}</h2>
                        <p>{donation.description}</p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default DonationDetails;