
import PropTypes from 'prop-types';

const Category = ({ category }) => {
    return (
        <div className="card bg-base-100 rounded shadow-md">
            <figure className=" p-3">
                <img
                    src={category.image}
                    alt="categoryImage"
                    className="rounded-xl w-2/3" />
            </figure>
            <div className="card-body px-1 py-2 items-center text-center">
                <h2 className="card-title text-xl font-bold">{category.category}</h2>
                <p className='text-gray-500 text-sm'>{category.achievement}</p>
                
            </div>
        </div>
    );
};

Category.propTypes = {
    category: PropTypes.object
};

export default Category;