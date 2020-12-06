//initial query to populate page
const errorReducer = (state="", action) =>{
    switch (action.type) {
        case 'SEND_ERROR':
            return action.payload;
        case 'RESET_ERROR':
            state=''
            return state;
        default:
            return state;
    };
}

export default  errorReducer;