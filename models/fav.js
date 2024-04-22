"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Fav extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.User.belongsToMany(models.Movie, {
        through: this,
        foreignKey: "user_id"
      });
      models.Movie.belongsToMany(models.User, {
        through: this,
        foreignKey: "movie_id"
      });
    }
  }
  Fav.init(
    {
      user_id: {
        type: DataTypes.STRING,
        references: {
          model: "User",
        },
      },
      movie_id: {
        type: DataTypes.STRING,
        references: {
          model: "Movie",
        },
      },
    },
    {
      sequelize,
      modelName: "Fav",
      // underscored: true,
      timestamps: false,
    }
  );
  return Fav;
};
