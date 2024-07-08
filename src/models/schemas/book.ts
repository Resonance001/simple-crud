import { DataTypes } from "sequelize";

const bookSchema = {
    isbn: {
        type: DataTypes.BIGINT,
        // primaryKey: true,
    },
    bookName: DataTypes.STRING,
    // authorName: DataTypes.STRING,
    genre: DataTypes.STRING,
};
  
export default bookSchema;