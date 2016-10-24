export default (state = {sent: [], recv: []}, action)=>{
    switch(action.type){
        case 'SENT':
            state.sent.push(action.msg);
            return state;
        case 'RECV':
            state.recv.push(action.msg);
            return state;
        default:
            return state;
    }
}
