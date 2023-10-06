import PropTypes from 'prop-types'; 

const Link = ({route}) => {
    return (
        <div>
            <li className="mr-10 px-4 hover:bg-white"><a href={route.path}>{route.name}</a></li>
            
        </div>
    );
};
Link.propTypes = {
    route:PropTypes.object,
}

export default Link;