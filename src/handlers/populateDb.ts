import type { APIGatewayProxyStructuredResultV2, Handler } from 'aws-lambda';
import { Books, Authors, Users, BorrowedBooks } from '../models/models';
import { books, authors, users, borrowedBooks } from '../utilities/populateDb';

export const handler: Handler =
    async (): Promise<APIGatewayProxyStructuredResultV2> => {
        /*
		await Authors.sync({force: true}).then(() => Books.sync({force: true}).then(() =>
			books.map(async (book) => {
				const { isbn, bookName, firstName, lastName, genre } = book;

				await Books.create(
					{
						isbn: isbn,
						bookName: bookName,
						genre: genre,
						authors: { 
							firstName: firstName, lastName: lastName,
						},
					},
					{
						include: [ bookAuthor ],
					}
				);
			})
		))
		*/

        // await Authors.sync();

        await Books.sync().then(() =>
            books.map(async (book) => {
                const { isbn, bookName, authorName, genre } = book;

                try {
                    await Books.create({
                        isbn,
                        bookName,
                        authorName,
                        genre,
                    });
                } catch (err) {
                    console.log(err);
                }
            })
        );

        await Authors.sync().then(() =>
            authors.map(async (author) => {
                const { firstName, lastName } = author;

                const currAuthor = await Authors.findOne({
                    where: { firstName: firstName, lastName: lastName },
                });
                if (currAuthor == null) {
                    await Authors.create({
                        firstName,
                        lastName,
                    });
                }
            })
        );

        await Users.sync().then(() =>
            users.map(async (user) => {
                const { userId, firstName, lastName, role } = user;

                try {
                    await Users.create({
                        userId,
                        firstName,
                        lastName,
                        role,
                    });
                } catch (err) {
                    console.log(err);
                }
            })
        );

        await BorrowedBooks.sync().then(() => {
            borrowedBooks.map(async (book) => {
                var { userId, isbn, role } = book;

                if (role == null) {
                    const user = await Users.findOne({
                        where: { userId: userId },
                    });
                    role = user.dataValues.role;
                }
                if (userId) {
                    await BorrowedBooks.create({
                        userId,
                        role,
                        isbn,
                    });
                }
            });
        });

        return {
            statusCode: 200,
        };
    };
