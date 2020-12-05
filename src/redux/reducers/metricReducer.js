// handles if theres metric vs imperial across all components
const metricReducer = (state=true, action) =>{
    switch (action.type) {
        case 'SET_IS_CELCIUS':
            return action.payload;
        default:
            return state;
    };
}

export default  metricReducer;