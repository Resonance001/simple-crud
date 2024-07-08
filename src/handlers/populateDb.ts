import type { APIGatewayProxyStructuredResultV2, Handler } from "aws-lambda";
import { Books, Authors } from "../models/models";
import { books } from "../utilities/populateDb";
import sequelize from "../sequelizeConfig";

export const handler: Handler =
	async (): Promise<APIGatewayProxyStructuredResultV2> => {
		// await Authors.sync();

		await sequelize.sync({force: true}).then(() =>
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
						include: [ Authors ],
					}
				);
			})
		)
		// await Authors.sync().then(() =>
		// 	Books.sync().then(() =>
		// 		books.map(async (book) => {
		// 			const { isbn, bookName, firstName, lastName, genre } = book;

		// 			await Books.create(
		// 				{
		// 					isbn,
		// 					bookName,
		// 					genre,
		// 					Authors: [{ firstName: firstName, lastName: lastName }],
		// 				},
		// 				{
		// 					include: [ Authors ],
		// 				}
		// 			);
		// 		})
		// 	)
		// );

		// User.create({
		// 	username: 'john_doe',
		// 	email: 'john@example.com',
		// 	Posts: [
		// 	  { title: 'First post', content: 'This is my first post' },
		// 	  { title: 'Second post', content: 'This is another post' }
		// 	]
		//   }, {
		// 	include: [ Post ] // Include the associated model (Post) when creating User
		//   }).then(user => {
		// 	console.log(user); // User instance with associated Posts
		//   }).catch(err => {
		// 	console.error('Error creating user:', err);
		//   });

		// await Authors.sync();

		// await Books.sync().then(() =>
		// 	books.map(async (book) => {
		// 		const { isbn, bookName, authorName, genre } = book;

		// 		try{
		// 			await Books.create({
		// 				isbn,
		// 				bookName,
		// 				authorName,
		// 				genre,
		// 			});
		// 		} catch(err){
		// 			console.log(err);
		// 		}
		// 	})
		// );

		// authors.map(async (author) => {
		// 	const { firstName, lastName } = author;

		// 	const currAuthor = await Authors.findOne({
		// 		where: { firstName: firstName, lastName: lastName },
		// 	});
		// 	if (currAuthor == null) {
		// 		await Authors.create({
		// 			firstName,
		// 			lastName,
		// 		});
		// 	}
		// })

		// await Authors.sync().then(() =>
		// 	authors.map(async (author) => {
		// 		const { firstName, lastName } = author;

		// 		const currAuthor = await Authors.findOne({
		// 			where: { firstName: firstName, lastName: lastName },
		// 		});
		// 		if (currAuthor == null) {
		// 			await Authors.create({
		// 				firstName,
		// 				lastName,
		// 			});
		// 		}
		// 	})
		// );

		return {
			statusCode: 200,
		};
	};
