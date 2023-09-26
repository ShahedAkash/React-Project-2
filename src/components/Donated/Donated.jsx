import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonations } from "../Utility/LocalStorage";
import DonatedCard from "../DonatedCard/DonatedCard";

const Donated = () => {
    const donations = useLoaderData();

    const [showAllDonations, setShowAllDonations] = useState(false);

    const [allDonations, setAllDonations] = useState([]);

    useEffect(() => {
        const storedDonations = getStoredDonations();
        if (donations.length) {
            const donated = donations.filter(donate => storedDonations.includes(donate.id));
            setAllDonations(donated);
        }
    }, []);

    return (
        <div className=" mt-10 w-11/12 mx-auto">
            <div className="grid grid-cols-2 gap-4">
                {
                    allDonations.slice(0, showAllDonations ? allDonations.length : 4).map(donatedList => <DonatedCard key={donatedList.id} donatedList={donatedList}></DonatedCard>)
                }
            </div>
            {!showAllDonations && allDonations.length >= 4 && (
                <div className="text-center my-6">
                    <button onClick={() => setShowAllDonations(true)} className="btn btn-primary">Show All</button>
                </div>
            )}
        </div>
    );
};

export default Donated;
