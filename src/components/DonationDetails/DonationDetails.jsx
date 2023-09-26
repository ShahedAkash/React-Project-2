import { useLoaderData, useParams } from "react-router-dom";
import { saveDonations } from "../Utility/LocalStorage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DonationDetails = () => {

    const donation = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const donate = donation.find(donate => donate.id === idInt);

    const { title, details, img, donation_price, text_color } = donate;

    const handelDonate = () => {
        saveDonations(idInt);
    }

    return (
        <div className="w-11/12 mx-auto">
            <div className="">
                <div className="">
                    <img className="w-full h-[70vh]" src={img} />
                    <div style={{ backgroundColor: 'rgba(11, 11, 11, 0.50)' }} className="w-full p-6 -mt-24 relative">
                        <button onClick={handelDonate} style={{ backgroundColor: text_color }} className="btn font-semibold text-white border-none">Donate ${donation_price}</button>
                    </div>
                </div>

            </div>
            <div className="mt-10">
                <h2 className="text-2xl font-bold my-2">{title}</h2>
                <p>{details}</p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default DonationDetails;