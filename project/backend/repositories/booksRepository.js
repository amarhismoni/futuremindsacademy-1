const { generateRandomString } = require("../utils");

let books = [
    {
        id: 1,
        isbn: "123-afds-9",
        title: "Kronike ne gur",
        author: "Ismail Kadare",
        publishedAt: "1972",
        genre: "biography",
        rating: 4.5,
        noOfPages: 250,
    },
    {
        id: 2,
        isbn: "456-bhkd-3",
        title: "1984",
        author: "George Orwell",
        publishedAt: "1949",
        genre: "dystopian",
        rating: 4.9,
        noOfPages: 328,
    },
    {
        id: 3,
        isbn: "789-jhgl-2",
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        publishedAt: "1960",
        genre: "fiction",
        rating: 4.8,
        noOfPages: 281,
    },
    {
        id: 4,
        isbn: "101-asdf-7",
        title: "Pride and Prejudice",
        author: "Jane Austen",
        publishedAt: "1813",
        genre: "romance",
        rating: 4.7,
        noOfPages: 279,
    },
    {
        id: 5,
        isbn: "112-ghjk-5",
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        publishedAt: "1925",
        genre: "classic",
        rating: 4.4,
        noOfPages: 180,
    },
    {
        id: 6,
        isbn: "134-uwqe-6",
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        publishedAt: "1951",
        genre: "fiction",
        rating: 4.3,
        noOfPages: 214,
    },
    {
        id: 7,
        isbn: "156-bvnm-3",
        title: "Moby-Dick",
        author: "Herman Melville",
        publishedAt: "1851",
        genre: "adventure",
        rating: 3.9,
        noOfPages: 635,
    },
    {
        id: 8,
        isbn: "178-xcnd-4",
        title: "War and Peace",
        author: "Leo Tolstoy",
        publishedAt: "1869",
        genre: "historical",
        rating: 4.8,
        noOfPages: 1225,
    },
    {
        id: 9,
        isbn: "190-pmws-5",
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        publishedAt: "1937",
        genre: "fantasy",
        rating: 4.7,
        noOfPages: 310,
    },
    {
        id: 10,
        isbn: "202-vbhk-7",
        title: "The Lord of the Rings: The Fellowship of the Ring",
        author: "J.R.R. Tolkien",
        publishedAt: "1954",
        genre: "fantasy",
        rating: 4.9,
        noOfPages: 423,
    },
    {
        id: 11,
        isbn: "214-zxbd-8",
        title: "The Diary of a Young Girl",
        author: "Anne Frank",
        publishedAt: "1947",
        genre: "biography",
        rating: 4.8,
        noOfPages: 283,
    },
    {
        id: 12,
        isbn: "226-nmjd-2",
        title: "Brave New World",
        author: "Aldous Huxley",
        publishedAt: "1932",
        genre: "dystopian",
        rating: 4.6,
        noOfPages: 268,
    },
    {
        id: 13,
        isbn: "238-oiuy-9",
        title: "Catch-22",
        author: "Joseph Heller",
        publishedAt: "1961",
        genre: "satire",
        rating: 4.3,
        noOfPages: 453,
    },
    {
        id: 14,
        isbn: "250-rtfg-0",
        title: "The Picture of Dorian Gray",
        author: "Oscar Wilde",
        publishedAt: "1890",
        genre: "classic",
        rating: 4.2,
        noOfPages: 254,
    },
    {
        id: 15,
        isbn: "262-kjhg-1",
        title: "Frankenstein",
        author: "Mary Shelley",
        publishedAt: "1818",
        genre: "horror",
        rating: 4.5,
        noOfPages: 280,
    },
    {
        id: 16,
        isbn: "274-dfgh-2",
        title: "Dracula",
        author: "Bram Stoker",
        publishedAt: "1897",
        genre: "horror",
        rating: 4.4,
        noOfPages: 418,
    },
    {
        id: 17,
        isbn: "286-qwer-3",
        title: "The Brothers Karamazov",
        author: "Fyodor Dostoevsky",
        publishedAt: "1880",
        genre: "philosophical",
        rating: 4.7,
        noOfPages: 796,
    },
    {
        id: 18,
        isbn: "298-tyui-4",
        title: "Crime and Punishment",
        author: "Fyodor Dostoevsky",
        publishedAt: "1866",
        genre: "psychological",
        rating: 4.8,
        noOfPages: 430,
    },
    {
        id: 19,
        isbn: "310-hjkl-5",
        title: "Anna Karenina",
        author: "Leo Tolstoy",
        publishedAt: "1877",
        genre: "romance",
        rating: 4.6,
        noOfPages: 864,
    },
    {
        id: 20,
        isbn: "322-wxyz-6",
        title: "Les Misérables",
        author: "Victor Hugo",
        publishedAt: "1862",
        genre: "historical",
        rating: 4.8,
        noOfPages: 1232,
    },
];

exports.getBookById = (id) => {
    return books.find((b) => b.id == id);
};

exports.getAllBooks = () => {
    return books;
};

exports.createBook = (book) => {
    let newId = generateRandomString(20);

    book.id = newId;
    books.push(book);

    return book;
};

exports.editBook = (id, book) => {
    const index = books.findIndex((b) => b.id === id);

    if (index !== -1) {
        books[index] = { ...books[index], ...book};
        return books[index];
    }
    return null;
};

exports.deleteBook = (id) => {
    books = books.filter((b) => b.id != id);
};
