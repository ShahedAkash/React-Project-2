import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const Donation = ({ donation }) => {

    const { id, img, type, title, color, text_color, type_bg_color } = donation;

    return (
        <Link to={`/donationDetail/${id}`}>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img className="w-full h-[50vh] md:h-[30vh] lg:h-[30vh]" src={img} /></figure>
                <div style={{backgroundColor: color}}  className="card-body rounded-b-xl">
                    <h6 style={{color: text_color, backgroundColor: type_bg_color}} className="text-xs p-1 px-2 rounded-lg w-fit">{type}</h6>
                    <h2 style={{color: text_color}} className="card-title">{title}</h2>
                </div>
            </div>
        </Link>
    );
};

Donation.propTypes = {
    donation: PropTypes.object.isRequired
}

export default Donation;