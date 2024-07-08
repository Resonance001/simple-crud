import type { APIGatewayProxyStructuredResultV2, Handler } from 'aws-lambda';
import { Books } from '../../models/models';

export const handler: Handler =
    async (): Promise<APIGatewayProxyStructuredResultV2> => {
        const bookLists = await Books.findAll({
            attributes: ['bookName', 'authorName'],
            // attributes: { exclude: ['genre'] },
        });

        return {
            statusCode: 200,
            body: JSON.stringify({
                data: bookLists,
            }),
        };
    };
