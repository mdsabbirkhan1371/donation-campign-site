import { useLoaderData, useParams } from "react-router-dom";


const DonationDetails = () => {
    const donations = useLoaderData();
    
    const {id}=useParams()
    const idInt = parseInt(id)
    console.log(donations,id,idInt)
    const donation = donations.find(donation=>donation.id===idInt)
    console.log(donation)

    return (
        <div>
            
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                    <figure>
                        <img className="w-full" src={donation.img_url} alt="Shoes" />
                    </figure>
                    <div className="card-actions justify-start">
                        <button className="btn btn-error m-7">Donate {donation.price}</button>
                    </div>
            </div>
            <div className="card-body  text-black">
                         <h2 className="card-title font-bold">{donation.title}</h2>
                        <p>{donation.description}</p>
            </div>
        </div>
    );
};

export default DonationDetails;