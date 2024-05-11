import { useEffect, useState } from "react";
import SingleDonation from "./SingleDonation/SingleDonation";

const AllDonations = () => {
   const [donations,setDonations]= useState([])

   useEffect(()=>{
    fetch('donation.json')
    .then(res=>res.json())
    .then(data=>setDonations(data))
   },[])
    
    return (
        <div className="mt-12">
            <h4 className="text-3xl font-semibold text-center">All Donations :{donations.length} </h4>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                {
                    donations.map(donation=><SingleDonation key={donation.id} donation={donation}></SingleDonation>)
                }
            </div>
        </div>
    );
};

export default AllDonations;