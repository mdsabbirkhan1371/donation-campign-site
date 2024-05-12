import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonateData } from "../../Utilities/localstorage";
import SingleDonation from "../SingleDonation/SingleDonation";


const Donation = () => {

    const donations = useLoaderData()

    const [donatesGives,setDonateGives]=useState([])

    useEffect(()=>{
        const storedDonateIds =getStoredDonateData()
        if(donations.length){
            // const donateGaves= donations.filter(donate=> storedDonateIds.includes(donate.id))
           let gaveDonates = []
           for(const id of storedDonateIds){
            const donation =donations.find(donation=>donation.id===id)
            if(donation){
                gaveDonates.push(donation)
            }
           }
          setDonateGives(gaveDonates)
        }
    },[donations])

    return (
        <div>
            <h3 className="text-center text-5xl mb-5">Donations : {donatesGives.length}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    donatesGives.map(donate=><SingleDonation key={donate.id} donate={donate}/>)
                }
            </div>
        </div>
    );
};

export default Donation;