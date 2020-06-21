const transreducer=((action,state)=>{
    switch(action.type){
        case "Add_trans":{
            return[action.payload , ...state]
        }
        default:
            return state;
    }

})

export default transreducer;