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
                amount:Number( Amount),
                desc: Desc
            });
            setDesc('');
            setAmount(0)
        }
        
        const getIncome = () => {
            let income = 0;
            for (var i = 0; i < trans.length; i++) {
                if (trans[i].amount > 0)
                    income = income + trans[i].amount
            }
            return income;
        }
    
        const getExpense = () => {
            let expense = 0;
            for (var i = 0; i < trans.length; i++) {
                if (trans[i].amount < 0)
                    expense += trans[i].amount
            }
            return expense;
        }


    return(
        <div>
            <div className="hader">
                <h1>Expense Tracker</h1>
            </div>
            <div>
                <h4>Balance </h4>
                <h4>${getIncome() + getExpense()}</h4>
            </div>
            <div className="incexp">
                <h3 className="inc">Income<br/>${getIncome()}</h3>
                <h3 className="exp">Expense<br/>${getExpense()}</h3>
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
                Enter Amount (For Expense Use Negative Number)<br/>
                <input type="number" required onChange={(ev)=>setAmount(ev.target.value)}/><br/>
                <input type="submit" value="Add Transaction"/>
            </form>


        </div>
    )
}