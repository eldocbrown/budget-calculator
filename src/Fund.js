import React, { useState, useEffect } from "react"

function Fund(props) {
    const [ amount, setAmount ] = useState(props.savings)
    const [ showInput, setShowInput ] = useState(false)
    const { onChange } = props

    function showInputElement() {
        setShowInput(true)
    }

    function changeShowInputElements() {
        setShowInput(prevShowInput => !prevShowInput)
    }

    function changeAmount() {
        setAmount(Number(document.getElementById('amountInput').value))
        changeShowInputElements()
    }

    useEffect(() => {
      onChange(amount)
    }, [amount, onChange])

    const amountHtml = showInput ?
        <input id="amountInput" type="number" placeholder="$" onKeyPress={e => e.key === 'Enter' ? changeAmount() : null} autoFocus/>
        :
        <span id="amount" className="font-weight-bold">$ {amount.toFixed(2)}</span>

    const buttonsHtml = showInput ?
        <div className="d-flex flex-row">
            <svg id="saveFundChangeButton" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-check2 inputAction text-success" viewBox="0 0 16 16" onClick={changeAmount}>
                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
            </svg>
            <svg id="cancelFundChangeButton" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x inputAction text-danger" viewBox="0 0 16 16" onClick={changeShowInputElements}>
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
        </div>
        :
        <button id="changeFundButton" className="btn btn-outline-success btn-sm" onClick={showInputElement}>Change</button>

    return (
        <div id="fundContainer" className="d-flex align-items-center">
            <span id="savingsText">My savings:&nbsp;
                {amountHtml}
            </span>
            {buttonsHtml}
        </div>
    )
}

export default Fund
