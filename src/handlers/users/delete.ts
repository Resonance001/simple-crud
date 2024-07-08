import type {
	APIGatewayProxyStructuredResultV2,
	APIGatewayProxyEventV2,
	Handler,
} from "aws-lambda";
import { User } from "../../models/models";

export const handler: Handler = async (
	event: APIGatewayProxyEventV2
): Promise<APIGatewayProxyStructuredResultV2> => {
	const { userId } = JSON.parse(event.body);

	await User.sync();

    await User.destroy({where: {userId: userId}})
    
    return {
        statusCode: 200
    }
};

