import React , {createContext ,useReducer, Children} from 'react';
import transreducer from './transReducwer';

const initialtrans=[
    {amount:200 , desc:"cash"},
    {amount:500 , desc:"book"},
    {amount:500 , desc:"fees"}

]
export const transContext=createContext(initialtrans);

export const TransactionProvider=({})=>{
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
            trans: state,
            addtransaction
        }}>
            {Children}
        </transContext.Provider>
    )
}