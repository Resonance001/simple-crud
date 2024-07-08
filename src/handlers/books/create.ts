import type {
	APIGatewayProxyStructuredResultV2,
	APIGatewayProxyEventV2,
	Handler,
} from "aws-lambda";
import { Books, Authors } from "../../models/models";

export const handler: Handler = async (
	event: APIGatewayProxyEventV2
): Promise<APIGatewayProxyStructuredResultV2> => {
	const {
		isbn,
		bookName,
		authorName: { firstName, lastName },
		// firstName,
		// lastName,
		genre,
	} = JSON.parse(event.body);

	/*
	await Authors.sync({force: true});
	await Books.sync({force: true});

	await Books.create({
		isbn: isbn,
		bookName: bookName,
		Authors: {
			firstName: firstName,
			lastName: lastName,
		}
	}, {
		include: [ Authors ]
	})
	*/
	
	Authors.sync().then(async () => {
		var author = await Authors.findOne({
			where: { firstName: firstName, lastName: lastName },
		});
		if (author == null) {
			author = await Authors.create({
				firstName,
				lastName,
			});
		}

		var authorName = author.get("fullName");

		try {
			await Books.sync().then(async () => {
				Books.create({
					isbn,
					bookName,
					authorName,
					genre,
				});
			});
		} catch (err) {
			console.log(err);
		}
	});

	return {
		statusCode: 200,
		body: JSON.stringify({
			message: `name: ${bookName} author: ${firstName} ${lastName}`,
		}),
	};
};
