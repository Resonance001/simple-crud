import type {
    APIGatewayProxyStructuredResultV2,
    APIGatewayProxyEventV2,
    Handler,
} from 'aws-lambda';
import { Users } from '../../models/models';
// import { Op } from 'sequelize';

export const handler: Handler = async (
    event: APIGatewayProxyEventV2
): Promise<APIGatewayProxyStructuredResultV2> => {
    // const { userId, books } = JSON.parse(event.body) || {};

    // TODO: DataTypes.ARRAY for postgres, Association for MySQL

    // await Users.sync();

    // const student = await Users.findByPk(userId);

    // student.dataValues.books = [student.dataValues.books, ...books];

    // return {
    //     statusCode: 200,
    // };

    // const user = await User.findOne({
    // 	where: {
    // 		[Op.or]: [
    // 			{ userId: userId },
    // 			{ firstName: firstName, lastName: lastName },
    // 		],
    // 	},
    // }).then(user => {
    //     if(user){

    //     } else{

    //     }
    // });

    // return{
    //     statusCode: 200,
    // }
    // if (user) {
    // 	return {
    // 		statusCode: 400,
    // 	};
    // }

    return {
        statusCode: 200,
    };
};
