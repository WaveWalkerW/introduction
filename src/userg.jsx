import PropTypes from 'prop-types';
import propTypes from 'prop-types';

function User(props){

    const Logged =  <h2 className="Logged">Welcome {props.username}</h2> 
    const unLogged = <h2 className="unLogged">Please log in to continue</h2> ;
  
    return(props.isLoggedIn ?  Logged : unLogged); 
}

User.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}

User.defaultProps = {
    isLoggedIn: false,
    username: 'Guest',
}
export default User;