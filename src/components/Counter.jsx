import {increment,decrement} from '../redux/action';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const Counter=({count,increment,decrement})=>{
    return(
        <div>
            <p>Count:{count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}
//props to access the count variable from the store 
const mapStateToProps=(state)=>({
    count:state.count,
});


//props validations
Counter.propTypes={
    count:PropTypes.number.isRequired,
    increment:PropTypes.func.isRequired,
    decrement:PropTypes.func.isRequired,
}

//connect to connect react component to the redux store(to access the state from the count)
//it can be use to get value from the store state or from the action creator that function from the action
const ConnectedCounter = connect(mapStateToProps, { increment, decrement })(Counter);
export default ConnectedCounter;
