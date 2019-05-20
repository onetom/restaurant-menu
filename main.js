function MenuItem(item, idx) {
    return (<div key={`menu-item-${idx}`}>{item.Product}</div>)
}

function Menu({menu}) {
    return (
        <div>
            <h1>Menu</h1>
            {menu.map(MenuItem)}
        </div>
    )
}

ReactDOM.render(
    <Menu menu={greenCottage}/>,
    document.getElementById('root')
)

/* Manual DOM manipulations outside of React, for debugging purposes */
document.getElementById('debug').innerText = JSON.stringify(greenCottage, false, 4)
