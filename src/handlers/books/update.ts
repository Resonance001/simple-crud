import type {
	APIGatewayProxyStructuredResultV2,
	APIGatewayProxyEventV2,
	Handler,
} from "aws-lambda";
import { Books } from "../../models/models";

export const handler: Handler = async (
	event: APIGatewayProxyEventV2
): Promise<APIGatewayProxyStructuredResultV2> => {
    const {
		bookName,
		authorName,
		genre,
	} = JSON.parse(event.body) || {};
    const { firstName, lastName } = authorName || {};

    const book = await Books.findOne({where: {bookName: bookName}});
	if(book == null){
        return {
            statusCode: 404 
        }
    } 

    if(firstName || lastName) await book.update({ authorName: `${firstName} ${lastName}`})
    if(genre) await book.update({ genre: genre });

    await book.save();

	return {
		statusCode: 200,
		body: JSON.stringify({
			message: `deleted ${bookName} `,
		}),
	};
};
