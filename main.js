ReactDOM.render(
    <h1>Menu</h1>,
    document.getElementById('root')
)

/* Manual DOM manipulations outside of React, for debugging purposes */
document.getElementById('debug').innerText = JSON.stringify(menu, false, 4)
