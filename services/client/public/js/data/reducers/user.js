export default (state = {}, action)=>{
    switch(action.type){
        case 'LOGIN':
        case 'REGISTER':
            return Object.assign({}, state, action.user);
        case 'LOGOUT':
            return {};
        default:
            return state;
    }
}
