import { DataTypes } from 'sequelize';

const authorSchema = {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    fullName: {
        type: new DataTypes.VIRTUAL(),
        get() {
            return `${this.firstName} ${this.lastName}`;
        },
        set() {
            throw new Error('Do not set value for fullname.');
        },
    },
};

export default authorSchema;
