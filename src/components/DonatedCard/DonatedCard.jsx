import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const DonatedCard = ({ donatedList }) => {
    const { id, type, img, title, donation_price, color, text_color, type_bg_color } = donatedList;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img className="w-[40vh] h-full" src={img} /></figure>
            <div style={{backgroundColor: color}} className="card-body rounded-r-xl">
                <p style={{color: text_color, backgroundColor: type_bg_color}} className="text-xs w-fit p-1 px-2 rounded-lg">{type}</p>
                <p style={{color: text_color}} className="font-bold">${donation_price}</p>
                <h2 className="card-title">{title}</h2>
                <div className="card-actions justify-start">
                    <Link to={`/donationDetail/${id}`}><button style={{backgroundColor: text_color}} className="btn text-white">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

DonatedCard.propTypes = {
    donatedList: PropTypes.object.isRequired
}

export default DonatedCard;