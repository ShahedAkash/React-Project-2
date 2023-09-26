import { useEffect, useState } from "react";
import Donation from "../Donation/Donation";

const Donations = () => {

    const [donations , setDonations] = useState([]);

    useEffect(()=>{
        fetch('api.json')
        .then(res => res.json())
        .then(data => setDonations(data))
    },[])

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 w-11/12 mx-auto mt-20">
            {
                donations.map(donation => <Donation key={donation.id} donation={donation}></Donation>)
            }
        </div>
    );
};

export default Donations;