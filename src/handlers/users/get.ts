import type { APIGatewayProxyStructuredResultV2, Handler } from 'aws-lambda';
import { Users } from '../../models/models';

export const handler: Handler =
    async (): Promise<APIGatewayProxyStructuredResultV2> => {
        const userLists = await Users.findAll({
            attributes: { exclude: ['userId'] },
        });

        return {
            statusCode: 200,
            body: JSON.stringify({
                data: userLists,
            }),
        };
    };
