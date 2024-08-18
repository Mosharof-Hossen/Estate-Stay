import { FaLocationDot } from "react-icons/fa6";
import PropTypes from 'prop-types';
import { FaFunnelDollar } from "react-icons/fa";

const ExploreCategoryCard = ({ singleCategory }) => {
    console.log(singleCategory);
    const { image, estate_title, segment_name, location, price, status } = singleCategory
    return (
        <div className="card bg-base-100 rounded  shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="Image" />
            </figure>
            <div className="p-5 text-left space-y-5">
                <h2 className="card-title font-bold text-2xl">{estate_title}</h2>
                <h4 className='text-2xl font-semibold text-gray-500'>Segment: {segment_name}</h4>
                <div className='space-x-4'>
                    <button disabled className='  px-3 py-1 rounded border-2 border-primary-color bg-transparent text-primary-color '>{status}</button>

                </div>
                <div className="flex space-x-10 text-gray-500">
                    <p className="flex items-center space-x-1"><FaLocationDot /> <span>{location}</span></p>
                    <p className="flex items-center space-x-1"><FaFunnelDollar /> <span>Price: {price}$</span></p>

                </div>
                <div className="card-actions ">
                    <button className="px-3 py-1 bg-primary-color text-white rounded">ViewProperty</button>
                </div>
            </div>
        </div>
    );
};

ExploreCategoryCard.propTypes = {
    singleCategory: PropTypes.object.isRequired
};

export default ExploreCategoryCard;