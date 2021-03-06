module.exports = function(sequelize, DataTypes) {
    var Entry = sequelize.define("entry", {
        // add user 
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      // hikeID: {
      //   type: DataTypes.INTEGER,
      //   // do we want to allow them not to have a name? if not I have the validation there
      //   allowNull: false,
      //   // validate: {
      //   //   len: [1]
      //   // }
      // },
      userID: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      dateHiked: {
        type: DataTypes.STRING,
        // defaultValue: "MM/DD/YYYY"
      },
      description: {
        type: DataTypes.TEXT,
        // defaultValue: "Pacific Crest Trail"
      },
      individualRating: {
        type: DataTypes.INTEGER,
        // defaultValue: ""
      },
      // public: {
      //   type: DataTypes. Boolean, 
      // }
    });

    Entry.associate = function(db) {
      db.hikes.hasMany(this, {
        foreignKey: "hikeID"
      });
      this.belongsTo(db.hikes, {
        foreignKey: "hikeID"
      });
    }

    return Entry;


  };

  // Entry.findAll({
  //   where:{id:hikeId},
  //   include:[
  //       { model:Entry, as:'hikeID',
  //         where:{
  //               is_valid:1,
  //               is_vertify:1},
  //         required:false
  //         }
  //       ]
  //    })
  //    .success(function(result) {
  //      callback(result);
  //  });