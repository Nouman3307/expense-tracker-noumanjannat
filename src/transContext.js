import React , {createContext ,useReducer} from 'react';
import transreducer from './transReducwer';

const initialtrans={trans:[
    

]}
export const transContext=createContext(initialtrans);

export const TransactionProvider=({children})=>{
    const [state, dispatch] = useReducer (transreducer, initialtrans);

    function addtransaction(tansobj){
        dispatch({
            type:"Add_trans",
            payload:{
                amount : tansobj.amount , 
                desc :  tansobj.desc
            }
        })
        
    }
    return(
        <transContext.Provider value={{
            trans: state.trans,
            addtransaction
        }}>
            {children}
        </transContext.Provider>
    )
}