const transreducer=(state,action)=>{
    switch(action.type){
        case "Add_trans":{
            console.log("Trnsreducer");
            console.log(state);
            return { 
                trans: [...state.trans , action.payload]
            }
        }
        default:
            return state;
    }

}

export default transreducer;