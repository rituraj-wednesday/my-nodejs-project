export default function (sequelize, DataTypes) {
    return sequelize.define(
      'authors',
      {
        id: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          primaryKey: true,
        },
        authorName: {
          field: 'author_name',
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        birthDate: {
          field: 'birth_date',
          type: DataTypes.DATE,
          allowNull: true,
        },
        nationality: {
          field: 'nationality',
          type: DataTypes.STRING(255),
          allowNull: false,
        },
      },
      {
        tableName: 'authors',
        timestamps: false,
      },
    );
  }
  