import { useState } from "react"


function BookButton({onClick, manga, isCompleted}) {
    const [clicked, setClicked] = useState(false);
    
    const handleClicked = () => {
        setClicked(!clicked);
    };

    if (isCompleted) {
        return(
            <div className="completed">
                <button onClick={handleClicked} className={clicked ? "clicked": "unClicked"}>
                    <img
                        src={manga.img}
                        alt={manga.title}
                        className="book-img"
                    />
                    <p>{manga.title} ✔</p>
                </button>
            </div>
        )
    }

    return(
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


export function Bookshelf() {
    return (
        <>
            <h1>Isekai Bookmark</h1>
            <div className="bookshelf">
                <BookButton
                    isCompleted = {true}
                    manga = {{
                        title: 'Kill The Villainess',
                        img:'https://animecorner.me/wp-content/uploads/2022/09/kill-the-villainess.jpg'
                    }}
                />
                
                <BookButton
                    isCompleted = {true}
                    manga = {{
                        title: 'Lady to Queen',
                        img: 'https://images.comico.io/comic/thumbnail/en/26/26/cover/main/1666388957137.jpg'
                    }}
                />
                <BookButton
                    isCompleted = {false}
                    manga = {{
                        title: 'The Remarried Empress',
                        img: 'http://prodimage.images-bn.com/pimages/9798400900051_p0_v2_s1200x630.jpg'
                    }}
                />
            </div>
        </>
    )
}

export default Bookshelf;