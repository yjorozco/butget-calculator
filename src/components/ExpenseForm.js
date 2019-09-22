import React from 'react'
import {MdSend} from 'react-icons/md'
function ExpenseForm({charge, amount, handleCharge, handleAmount, handleSubmit, edit}) {
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-center">
                <div className="form-group">
                    <label htmlFor="charge">Charge</label>
                    <input type="text"
                    className="form-control" 
                    placeholder="e.g rent"
                    id="charge" name="charge" 
                    value={charge}
                    onChange={handleCharge}
                    />
 
                </div>
                <div className="form-group">
                    <label htmlFor="amount">Amount</label>
                    <input type="text"
                    className="form-control" 
                    placeholder="e.g 100"
                    value={amount}
                    onChange={handleAmount}
                    id="amount" name="amount" />
                </div>
                </div>
                <button type="submit" className="btn">
                    {edit?'edit':'submit'}
                    <MdSend className="btn-ico" />
                </button> 
        </form>
    )
}

export default ExpenseForm
