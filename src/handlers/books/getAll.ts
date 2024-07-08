import type { APIGatewayProxyStructuredResultV2, Handler } from 'aws-lambda';
import { Books } from '../../models/models';

export const handler: Handler =
	async (): Promise<APIGatewayProxyStructuredResultV2> => {

			
		// await Authors.findAll({
		// 	where: { firstName: 'Albus' },
		// }).then((authors) =>
		// 	authors.map((name) => {
		// 		console.log(name.get('fullName'));
		// 	})
		// );

		// await models.Orderitem.findAll({
		// 	where: { orderId: orderId },
		//   }).then((orderitems) =>
		// 	orderitems.map((orderitem) => {
		// 	  console.log('orderitem:', orderitem);
		// 	  console.log('totalPrice (virtual field): ', orderitem.totalPrice);
		// 	})
		//   );

		// return {
		// 	statusCode: 200
		// }

		const bookLists = await Books.findAll({
			attributes: ["bookName", "authorName"],
			// attributes: { exclude: ['genre'] },
		});

		return {
			statusCode: 200,
			body: JSON.stringify({
				data: bookLists,
			}),
		};
	};
