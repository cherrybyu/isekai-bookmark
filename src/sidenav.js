export function SideNav({onClick}) {
    const genreList =[
        {id: 1, genre: 'All'},
        {id: 2, genre: 'Genre A'},
        {id: 3, genre: 'Genre B'},
        {id: 4, genre: 'Genre C'}
    ]

    return (
        <div className="sidenav">
            <ul className="sidenav-list">
                {genreList.map(item => (
                    <li key={item.id}>
                        <button 
                            onClick={() => {onClick(item.genre)}} 
                            className="sidenav-button"
                        >
                            {item.genre}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}