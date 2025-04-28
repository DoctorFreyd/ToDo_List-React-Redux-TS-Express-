import { DataType, DataTypes, Model } from 'sequelize';
import sequelize from '../db';

class Todo extends Model {
  public id!: string;
  public title!: string;
  public text!: string;
  public completed!: boolean;
}

Todo.init(
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    text: {
      type: DataTypes.STRING(300),
      allowNull: false,
      defaultValue: false,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: 'Todo',
    tableName: 'todos',
    timestamps: false,
  },
);

export default Todo;
