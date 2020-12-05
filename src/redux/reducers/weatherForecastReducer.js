//initial query to populate page
const weatherReducer = (state="", action) =>{
    switch (action.type) {
        case 'SEND_USER_FORECAST_INPUT_INFO':
            console.log('inside of our reducer',action.payload)
            return action.payload;
        default:
            return state;
    };
}

export default  weatherReducer;