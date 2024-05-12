import { useEffect, useState } from "react";
import FeaturedDonation from "../FeaturedDonation/FeaturedDonation";


const FeaturedDonations = () => {

    const [donations,setDonations]=useState([])
    useEffect(()=>{
        fetch('donations.json')
        .then(res=>res.json())
        .then(data=>setDonations(data))
    },[])

    return (
        <div>
            <h3 className="text-5xl text-center my-5">All Donations: {donations.length}</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                {
                    donations.map(donation=><FeaturedDonation donation={donation} key={donation.id}></FeaturedDonation>)
                }
            </div>
        </div>
    );
};

export default FeaturedDonations;