function MenuItem(item, idx) {
    return (
        <tr key={`menu-item-${idx}`}>
            <td className="description">
                <textarea placeholder={"English description"}
                          defaultValue={item.EN}>
                </textarea>
                <textarea placeholder={"Chinese description"}
                          defaultValue={item.CN}>
                </textarea>
            </td>
            <td className="price">
                <textarea placeholder={"Price 1"}
                          defaultValue={item.price1}
                          rows={1}>
                </textarea>
            </td>
            <td className="price">
                <textarea placeholder={"Price 2"}
                          defaultValue={item.price2}
                          rows={1}>
                </textarea>
            </td>
            <td className="price">
                <textarea placeholder={"Price 3"}
                          defaultValue={item.price3}
                          rows={1}>
                </textarea>
            </td>
        </tr>
    )
}

function Menu({menu}) {
    return (
        <div>
            <h1>Menu</h1>
            <table>
                <thead>
                <tr>
                    <th className="description">Description</th>
                    <th className="price">Price 1</th>
                    <th className="price">Price 2</th>
                    <th className="price">Price 3</th>
                </tr>
                </thead>

                <tbody>
                {menu.map(MenuItem)}
                </tbody>
            </table>
        </div>
    )
}

ReactDOM.render(
    <Menu menu={greenCottage}/>,
    document.getElementById('root')
)

/* Manual DOM manipulations outside of React, for debugging purposes */
document.getElementById('debug').innerText = JSON.stringify(greenCottage, false, 4)
