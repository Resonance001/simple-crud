import { DataTypes } from 'sequelize';

const borrowedBookSchema = {
    userId: DataTypes.INTEGER,
    role: {
        type: DataTypes.ENUM('student', 'teacher', 'researcher'),
    },
    isbn: DataTypes.BIGINT,
};

export default borrowedBookSchema;
