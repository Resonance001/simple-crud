import type { APIGatewayProxyStructuredResultV2, Handler } from 'aws-lambda';
import { Books, Authors } from '../models/models';

export const handler: Handler =
	async (): Promise<APIGatewayProxyStructuredResultV2> => {

		// const allInstances = await Authors.findAll({
        //     // attributes: [fullName, bookName],
        //     include: {
        //         model: Books,
        //         // as: 'authorList',
        //         // required: true,
        //     }
        // });

        const allInstances = await Books.findAll({
            // attributes: [fullName, bookName],
            include: {
                model: Authors,
                // as: 'authorList',
                // required: true,
            }
        });

        

		return {
			statusCode: 200,
			body: JSON.stringify({
				data: allInstances,
			}),
		};
	};
