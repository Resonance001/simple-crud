import { DataTypes } from 'sequelize';

const bookSchema = {
    isbn: DataTypes.BIGINT,
    bookName: DataTypes.STRING,
    authorName: DataTypes.STRING,
    genre: DataTypes.STRING,
};

export default bookSchema;
