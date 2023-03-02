class Book {
    constructor(
        name,
        author,
        yearPublished,
        pageNum,
        bookOpen
    ) {
        this.name = name;
        this.author = author;
        this.yearPublished = yearPublished;
        this.pageNum = pageNum;
        this.bookOpen = bookOpen
    }
    openBook(bookStatus) {
        this.bookOpen = bookStatus;
    }

}

export default Book;