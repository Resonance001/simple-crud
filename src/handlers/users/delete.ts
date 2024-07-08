import type {
    APIGatewayProxyStructuredResultV2,
    APIGatewayProxyEventV2,
    Handler,
} from 'aws-lambda';
import { Users } from '../../models/models';

export const handler: Handler = async (
    event: APIGatewayProxyEventV2
): Promise<APIGatewayProxyStructuredResultV2> => {
    const { userId } = JSON.parse(event.body);

    await Users.destroy({ where: { userId: userId } });

    return {
        statusCode: 200,
    };
};
