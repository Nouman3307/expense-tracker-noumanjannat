import React, { useContext ,useState} from 'react';
import './App';
import {transContext} from './transContext';
export default function History()
{
    let {trans , addtransaction}=useContext(transContext)
    let[Desc,setDesc] = useState("");
        let[Amount,setAmount] = useState(0);
        const handleAddition=(event)=>{
            event.preventDefault();
            console.log(Desc,Amount);
            addtransaction({
                amount: Amount,
                desc: Desc
            });
        }
    return(
        <div>
            <div className="hader">
                <h1>Expense Tracker</h1>
            </div>
            <div>
                <h4>Balance </h4>
                <h4>$0.0</h4>
            </div>
            <div className="incexp">
                <h3>Income<br/>0.00</h3>
                <h3>Expense<br/>0.00</h3>
            </div>
            <h3> History</h3>
            <hr/>
            <ul className="history">
                {trans.map((transObj, ind) => {
                        return (<li key={ind}>
                            <span>{transObj.desc}</span>
                            <span>${transObj.amount}</span>
                        </li>
                        )
                    })}
            </ul>

            <h4>Add New Transaction</h4>
            <hr/>
            <form className="trans-form" onSubmit={handleAddition}> 
                Transaction Description
                <br/>
                <input type="text" onChange={(ev)=>setDesc(ev.target.value)}/><br/>
                Enter Amount<br/>
                <input type="number" required onChange={(ev)=>setAmount(ev.target.value)}/><br/>
                <input type="submit" value="Add Transaction"/>
            </form>


        </div>
    )
}