import { useState } from "react"
import {mangaList} from "./data.js"

function BookButton({onClick, manga}) {
    const [clicked, setClicked] = useState(false);
    const handleClicked = () => {
        setClicked(!clicked);
    };
    return (
        <div>
            <button onClick={handleClicked} className={clicked ? "clicked": "unClicked"}>
                <img
                    src={manga.img}
                    alt={manga.title}
                    className="book-img"
                />
                <p>{manga.title} </p>
            </button>
        </div>
    )
}

export function Bookshelf({genre}) {
    const filterMapGenre = () => {
        let filteredList = mangaList
        if (genre != "All") {
           filteredList = mangaList.filter(item => item.genre == genre)
        }
        return filteredList.map(filteredItem => (
            <BookButton 
                key = {filteredItem.id}
                manga = {{img: filteredItem.img, title: filteredItem.title}}
            />
        ))
    }

    return (
        <>
            <div className="bookshelf">{filterMapGenre()}</div>
        </>
    )
}

export default Bookshelf;