import type {
    APIGatewayProxyStructuredResultV2,
    APIGatewayProxyEventV2,
    Handler,
} from 'aws-lambda';
import { BorrowedBooks } from '../../models/models';

export const handler: Handler = async (
    event: APIGatewayProxyEventV2
): Promise<APIGatewayProxyStructuredResultV2> => {
    const { userId, isbn } = JSON.parse(event.body);

    await BorrowedBooks.destroy({
        where: {
            userId: userId,
            isbn: isbn,
        },
    });

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: `deleted ${isbn} borrowed by ${userId} `,
        }),
    };
};
