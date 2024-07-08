import type {
    APIGatewayProxyStructuredResultV2,
    APIGatewayProxyEventV2,
    Handler,
} from 'aws-lambda';
import { Users, BorrowedBooks } from '../../models/models';

export const handler: Handler = async (
    event: APIGatewayProxyEventV2
): Promise<APIGatewayProxyStructuredResultV2> => {
    var { userId, role, isbn } = JSON.parse(event.body) || {};

    await BorrowedBooks.sync().then(async () => {
        if (role == null) {
            const user = await Users.findOne({
                where: { userId: userId },
            });
            role = user.dataValues.role;
        }
        if (userId) {
            await BorrowedBooks.create({
                userId,
                role,
                isbn,
            });
        }
    });

    if (userId) {
        return {
            statusCode: 200,
        };
    }

    return {
        statusCode: 400,
        body: JSON.stringify({
            message: `userId is required`,
        }),
    };
};
