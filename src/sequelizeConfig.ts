import { Sequelize } from "sequelize";

const { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'mysql',
	logging: true,
});

sequelize
	.authenticate()
	.then(() => {
		console.log("Connected to database");
	})
	.catch((err) => {
		console.log("Unable to connect to database", err);
	});

export default sequelize;