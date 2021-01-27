import React, { useState } from "react"
import Header from "./Header"
import Fund from "./Fund"
import Cart from "./Cart"

function App() {
    const [ savings, setSavings ] = useState(0)
    const [ wishListAmount, setWishListAmount ] = useState(0)

    return (
        <div id="appContainer" className="container-fluid shadow p-3 mb-5 bg-light rounded-lg card" >
            <Header />
            <hr/>
            <Fund savings={savings} onChange={value => setSavings(value)} />
            <hr/>
            <Cart savings={savings} wishListAmount={wishListAmount} onChange={value => setWishListAmount(value)}/>
        </div>
    )
}

export default App
