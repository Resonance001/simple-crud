import sequelize from "../sequelizeConfig.js";
import bookSchema from "./schemas/book.js";
import authorSchema from "./schemas/author.js";
import userSchema from "./schemas/user.js";

const User = sequelize.define("users", userSchema, {
	tableName: "users_tb",
	timestamps: false,
})

const Books = sequelize.define("books", bookSchema, {
	freezeTableName: true,
	tableName: "books_tb",
	timestamps: false,
});

const Authors = sequelize.define("authors", authorSchema, {
	tableName: "authors_tb",
	timestamps: false,
})

Authors.hasMany(Books, { onDelete: 'SET NULL', onUpdate: 'CASCADE', foreignKey: 'authorId' });
Books.belongsTo(Authors, { onDelete: 'SET NULL', onUpdate: 'CASCADE', foreignKey: 'authorId' });

export {
	User,
	Books,
	Authors,
};
