import React, {useState, useEffect} from "react"
import Status from "./Status"


function Cart(props) {
    const [ items, setItems ] = useState([]) // {name: "...", qty: x, price: x.xx}
    const [ name, setName ] = useState("")
    const [ qty, setQty ] = useState("")
    const [ price, setPrice ] = useState("")
    const [ total, setTotal ] = useState(props.wishListAmount)
    const { onChange } = props

    useEffect(() => {
        let suma = 0
        items.map( item => suma = suma + (item.price*item.qty) )
        setTotal(suma)
    }, [items])

    useEffect(() => {
      onChange(total)
    }, [total, onChange])

    function addItem(event) {
        //todo: validate form
        event.preventDefault()

        setItems(prevItems => {
            let myItems = Array.from(prevItems)
            myItems.push({
                key: myItems.length ? myItems[myItems.length - 1].key + 1 : 1,
                name: name,
                qty: qty,
                price: price
            })
            setName("")
            setQty("")
            setPrice("")
            return myItems
        })

        document.getElementById('input-item-name').focus()
    }

    function removeItem(event) {
        event.preventDefault()

        setItems(prevItems => {
            let myItems = []
            prevItems.map( item => {
                if (+item.key !== +event.target.dataset.id) {
                    myItems.push(item)
                }
                return 0
            })

            return myItems
        })
    }

    const itemList = items.map( item => {
        return (
            <form key={item.key} data-id={item.key} onSubmit={removeItem}>
                <div className="form-row align-items-center">
                    <div className="col">
                        <input name="name" type="text" className="form-control" placeholder="Item name" value={item.name} readOnly/>
                    </div>
                    <div className="col-2">
                        <input name="qty" type="number" className="form-control" placeholder="Qty" value={item.qty} readOnly/>
                    </div>
                    <div className="col-3">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text">$</div>
                            </div>
                            <input name="price" type="number" className="form-control" placeholder="Price" value={item.price} readOnly/>
                        </div>
                    </div>
                    <div className="col">
                        <button className="btn-sm btn-outline-danger">Remove</button>
                    </div>
                </div>
            </form>
        )
    })

    return (
        <div>
            <div className="d-flex flex-row align-items-top">
                <p id="wishListTotal">My WishList: <strong>$ {total.toFixed(2)}</strong></p>
                <Status savings={props.savings} wishListAmount={total} />
            </div>
            <form onSubmit={addItem}>
                <div className="form-row">
                    <div className="col">
                        <input id="input-item-name" name="name" type="text" className="form-control" placeholder="Item name" value={name} onChange={event => setName(event.target.value)} autoFocus required/>
                    </div>
                    <div className="col-2">
                        <input name="qty" type="number" className="form-control" placeholder="Qty" value={qty} onChange={event => setQty(event.target.value)} min="1" step="1"/>
                    </div>
                    <div className="col-3">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text">$</div>
                            </div>
                            <input name="price" type="number" className="form-control" placeholder="Price" value={price} onChange={event => setPrice(event.target.value)} min="0.01" step="0.01"/>
                        </div>
                    </div>
                    <div className="col">
                        <button className="btn btn-primary">Add</button>
                    </div>
                </div>
            </form>
            {itemList}
        </div>

    )
}

export default Cart
