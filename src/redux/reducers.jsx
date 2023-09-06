//the count state is set initially 0
const initialState={
    count:0,
};


//when from action called the increment or decrement according action the case is called
//returning in the spread due to immutability
const rootReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'INCREMENT':
            return {...state,count:state.count+1};
        case 'DECREMENT':
            return {...state,count:state.count-1};
        default:
            return state;
    }
}

export default rootReducer;