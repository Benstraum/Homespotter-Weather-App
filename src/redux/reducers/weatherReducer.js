//initial query to populate page
const weatherReducer = (state='', action) =>{
    switch (action.type) {
        case 'SEND_TEST_INFO':
            console.log('inside of our reducer',action.payload)
            return action.payload;
        default:
            return state;
    };
}

export default  weatherReducer;