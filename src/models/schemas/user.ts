import { DataTypes } from "sequelize";

const userSchema = {
    userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    role: {
        type: DataTypes.ENUM('student', 'teacher', 'researcher'),
    },
    // books: {
    //     type: DataTypes.JSON,
    //     defaultValue: []
    // }
};
  
export default userSchema;