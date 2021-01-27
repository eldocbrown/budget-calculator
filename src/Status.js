import React from "react"

function Status(props) {
    
    let result
    
    let messageHTML
    if (!props.wishListAmount && !props.savings) {
        messageHTML = null
    } else {
        result = props.savings - props.wishListAmount
        if (result > 0) {
            messageHTML = <div className="text-success font-weight-bold">Hurray! You still have $ {result.toFixed(2)} more to spend!</div>
        } else if (result < 0) {
            messageHTML = <div className="text-danger">Sorry, you don have enough savings. You are $ {(-result).toFixed(2)} short.</div>
        } else {
            messageHTML = <div className="text-primary">Hurray! You can buy your wishlist, but you'll spend all of your money.</div>
        }
    }
    
    return (
            <div className="status ml-auto">{messageHTML}</div>
            )       
}

export default Status