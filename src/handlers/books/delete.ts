import type {
	APIGatewayProxyStructuredResultV2,
	APIGatewayProxyEventV2,
	Handler,
} from "aws-lambda";
import { Books } from "../../models/models";

export const handler: Handler = async (
	event: APIGatewayProxyEventV2
): Promise<APIGatewayProxyStructuredResultV2> => {
	const { bookName } = JSON.parse(event.body);

	await Books.destroy({
		where: {
			bookName: bookName,
		},
	});

	return {
		statusCode: 200,
		body: JSON.stringify({
			message: `deleted ${bookName} `,
		}),
	};
};
