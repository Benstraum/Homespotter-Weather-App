// make cases for martial & simple weapons, armor and shields. make state an object with arrays inside.
const testReducer = (state='', action) =>{
    switch (action.type) {
        case 'SEND_TEST_INFO':
            console.log('inside of our reducer',action.payload)
            return action.payload;
        default:
            return state;
    };
}

export default  testReducer;