import { Link } from "react-router-dom";


const Donation = ({ donation }) => {

    const { id, img, type, title, color, text_color } = donation;

    return (
        <Link to={`/donationDetail/${id}`}>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img className="w-full h-[50vh] md:h-[30vh] lg:h-[30vh]" src={img} /></figure>
                <div style={{backgroundColor: color}}  className="card-body rounded-b-xl">
                    <p style={{color: text_color}} className="text-xs">{type}</p>
                    <h2 style={{color: text_color}} className="card-title">{title}</h2>
                </div>
            </div>
        </Link>
    );
};

export default Donation;