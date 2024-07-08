export const books = [
    {
        isbn: 9781451669411,
        bookName: 'Hamlet',
        authorName: 'William Shakespeare',
        // firstName: "William",
        // lastName: "Shakespeare",
        genre: 'Tragedy',
    },
    {
        isbn: 9780743477543,
        bookName: "A Midsummer Night's Dream",
        authorName: 'William Shakespeare',
        genre: 'Comedy',
    },
    {
        isbn: 9780156012195,
        bookName: 'The Little Prince',
        authorName: 'Antoine de Saint-Exupery',
        // firstName: "Antoine",
        // lastName: "de Saint-Exupery",
        genre: 'Fable',
    },
    {
        isbn: 9781949859188,
        bookName: "Dvoretsky's Endgame Manual",
        authorName: 'Mark Dvoretsky',
        // firstName: "Mark",
        // lastName: "Dvoretsky",
    },
    {
        isbn: 9781781945155,
        bookName: 'My Great Predecessors',
        authorName: 'Garry Kasparov',
        // firstName: "Garry",
        // lastName: "Kasparov",
    },
];

export const authors = [
    {
        firstName: 'William',
        lastName: 'Shakespeare',
    },
    {
        firstName: 'Antoine',
        lastName: 'de Saint-Exupery',
    },
    {
        firstName: 'Mark',
        lastName: 'Dvoretsky',
    },
    {
        firstName: 'Garry',
        lastName: 'Kasparov',
    },
];

export const users = [
    {
        userId: 150671,
        firstName: 'Vince',
        lastName: 'Casimiro',
        role: 'student',
    },
    {
        userId: 120273,
        firstName: 'Greg',
        lastName: 'House',
        role: 'teacher',
    },
    {
        userId: 120398,
        firstName: 'James',
        lastName: 'Wilson',
        role: 'teacher',
    },
    {
        userId: 1208172,
        firstName: 'Lisa',
        lastName: 'Cuddy',
        role: 'researcher',
    },
];

export const borrowedBooks = [
    {
        userId: 150671,
        isbn: 9781949859188,
    },
    {
        userId: 120273,
        isbn: 9781451669411,
        role: 'teacher',
    },
];
