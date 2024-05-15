function organizeShelves(input) {
    const shelves = {};

    input.forEach(entry => {
        if (entry.includes("->")) {
            const [id, genre] = entry.split(" -> ");
            if (!shelves[id]) {
                shelves[id] = { genre, books: [] };
            }
        } else {
            const [titleAuthor, genre] = entry.split(", ");
            const [title, author] = titleAuthor.split(": ");
            for (const shelfId in shelves) {
                if (shelves[shelfId].genre === genre) {
                    shelves[shelfId].books.push({ title, author });
                    break;
                }
            }
        }
    });


    const sortedShelvesIds = Object.keys(shelves).sort((a, b) => shelves[b].books.length - shelves[a].books.length);


    sortedShelvesIds.forEach(id => {
        const shelf = shelves[id];
        shelf.books.sort((a, b) => a.title.localeCompare(b.title));
        
        console.log(`${id} ${shelf.genre}: ${shelf.books.length}`);
        shelf.books.forEach(book => console.log(`--> ${book.title}: ${book.author}`));
    });
}
