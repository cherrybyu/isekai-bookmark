export function NavBar() {
    const navbarArray = [
        {id: 1, page: "Profile"},
        {id: 2, page: "My Library"}
    ]

    return (
        <div className="navbar">
            <ul className="navbar-list">
                {navbarArray.map(item => (
                    <li key={item.id}>
                        <button
                            className="navbar-button"
                        >
                            {item.page}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}