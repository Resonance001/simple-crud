import { DataTypes } from 'sequelize';

const userSchema = {
    userId: DataTypes.BIGINT,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    role: {
        type: DataTypes.ENUM('student', 'teacher', 'researcher'),
    },
};

export default userSchema;
