import type { APIGatewayProxyStructuredResultV2, Handler } from 'aws-lambda';
import { BorrowedBooks } from '../../models/models';

export const handler: Handler =
    async (): Promise<APIGatewayProxyStructuredResultV2> => {
        const borrowedBookLists = await BorrowedBooks.findAll({});

        return {
            statusCode: 200,
            body: JSON.stringify({
                data: borrowedBookLists,
            }),
        };
    };
