import PropTypes from 'prop-types';
import { AiFillCheckCircle } from "react-icons/ai";


const Feature = ({feature}) => {
    return (
        <div>
            <p className='font-semibold text-base flex items-center'> 
            <AiFillCheckCircle className='text-yellow-400 text-xl mr-4'></AiFillCheckCircle>
            {feature}</p>
            
        </div>
    );
};
Feature.propTypes = {
    feature: PropTypes.string,
}

export default Feature;