import type {
    APIGatewayProxyStructuredResultV2,
    APIGatewayProxyEventV2,
    Handler,
} from 'aws-lambda';
import { Users } from '../../models/models';

export const handler: Handler = async (
    event: APIGatewayProxyEventV2
): Promise<APIGatewayProxyStructuredResultV2> => {
    const { userId, firstName, lastName, role } = JSON.parse(event.body);

    await Users.sync();

    const user = await Users.findOne({
        where: { firstName: firstName, lastName: lastName },
    });
    if (user) {
        return {
            statusCode: 400,
        };
    }

    try {
        await Users.create({
            userId,
            firstName,
            lastName,
            role,
        });

        return {
            statusCode: 200,
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 400,
        };
    }
};
