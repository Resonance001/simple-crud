import { DataTypes } from "sequelize";

const authorSchema = {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    fullName: {
        type: new DataTypes.VIRTUAL,
        get() {
          return `${this.firstName} ${this.lastName}`;
        },
        set() {
          // throw new Error('Don\'t set value for fullname');
          throw new Error('dont set value');
        },
      },
};
  
export default authorSchema;