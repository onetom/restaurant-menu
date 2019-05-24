const {useState} = React

function Editable({editing, placeholder, value, rows, ...props}) {
    return editing
        ? <textarea {...props}
                    placeholder={placeholder}
                    defaultValue={value}
                    rows={rows}/>
        : <div {...props}>{value}</div>
}

function MenuItem(item) {
    return (
        <tr key={`menu-item-${item.id}`}>
            <td className="description">
                <Editable placeholder={"English description"}
                          value={item.EN}
                          editing={item.editing}>
                </Editable>
                <Editable placeholder={"Chinese description"}
                          value={item.CN}
                          editing={item.editing}>
                </Editable>
            </td>
            <td className="price">
                <Editable placeholder={"Price 1"}
                          value={item.price1}
                          rows={1}
                          editing={item.editing}>
                </Editable>
            </td>
            <td className="price">
                <Editable placeholder={"Price 2"}
                          value={item.price2}
                          rows={1}
                          editing={item.editing}>
                </Editable>
            </td>
            <td className="price">
                <Editable placeholder={"Price 3"}
                          value={item.price3}
                          rows={1}
                          editing={item.editing}>
                </Editable>
            </td>
        </tr>
    )
}

function MenuEditor({menu}) {
    const [state, setState] = useState({
        editing: true
    })

    const toggleEdit = () => setState({editing: !state.editing})

    return (
        <div>
            <h1>
                {state.editing
                    ? <a href="#view" onClick={toggleEdit}>View</a>
                    : <a href="#edit" onClick={toggleEdit}>Edit</a>}
                &nbsp;menu
            </h1>
            <table className="menu">
                <thead>
                <tr>
                    <th className="description">Description</th>
                    <th className="price">Price 1</th>
                    <th className="price">Price 2</th>
                    <th className="price">Price 3</th>
                </tr>
                </thead>

                <tbody>
                {menu.map((item) =>
                    MenuItem({...item, editing: state.editing}))}
                </tbody>
            </table>
        </div>
    )
}

const greenCottageWithIds = greenCottage.map(item => ({...item, id: ULID.ulid()}))

ReactDOM.render(
    <MenuEditor menu={greenCottageWithIds}/>,
    document.getElementById('root')
)

/* Manual DOM manipulations outside of React, for debugging purposes */
// document.getElementById('debug').innerText = JSON.stringify(greenCottage, false, 4)
