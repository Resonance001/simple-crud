import type {
    APIGatewayProxyStructuredResultV2,
    APIGatewayProxyEventV2,
    Handler,
} from 'aws-lambda';
import { Users } from '../../models/models';

export const handler: Handler = async (
    event: APIGatewayProxyEventV2
): Promise<APIGatewayProxyStructuredResultV2> => {
    const { userId, firstName, lastName, role } = JSON.parse(event.body) || {};

    const user = await Users.findOne({ where: { userId: userId } });
    if (user == null) {
        return {
            statusCode: 404,
        };
    }

    if (userId) await user.update({ userId: userId });
    if (firstName) await user.update({ firstName: firstName });
    if (lastName) await user.update({ lastName: lastName });
    if (role) await user.update({ role: role });

    await user.save();

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: `updated ${userId} `,
        }),
    };
};
