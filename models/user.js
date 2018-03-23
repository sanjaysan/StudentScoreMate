module.exports = function (sequelize, DataTypes) {
  const users = sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    sis_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sis_login_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    section_hw1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    section_hw2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    section_hw3: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    section_hw4: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    section_hw5: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    section_hw6: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  })

  users.getUserByName = function (name, callback) {
    users.find({
      where: {
        name: name
      }
    }).then(function (user) {
      return callback(null, user)
    }).catch(function (err) {
      return callback(err, null)
    })
  };

  users.createUser = function(newUser, callback) {
    users.create(newUser).then(function (user) {
      return callback(null, user)
    }).catch(function (err) {
      return callback(err, null)
    })
  }

  users.getUserById = function (id, callback) {
    users.find({
      where: {
        id: id
      }
    }).then(function (user) {
      return callback(null, user)
    }).catch(function (err) {
      return callback(err, null)
    })
  };

  // Update hw1
  users.updatehw1 = function (id, score, callback) {
    users.update({
      section_hw1: score
    }, {
      where: {
        id: id
      }
    }).then(function (user) {
      return callback(null, user)
    }).catch(function (err) {
      return callback(err, null)
    })
  }

  // Update hw2
  users.updatehw2 = function (id, score, callback) {
    users.update({
      section_hw2: score
    }, {
      where: {
        id: id
      }
    }).then(function (user) {
      return callback(null, user)
    }).catch(function (err) {
      return callback(err, null)
    })
  }

  // Update hw3
  users.updatehw3 = function (id, score, callback) {
    users.update({
      section_hw3: score
    }, {
      where: {
        id: id
      }
    }).then(function (user) {
      return callback(null, user)
    }).catch(function (err) {
      return callback(err, null)
    })
  }

  // Update hw4
  users.updatehw4 = function (id, score, callback) {
    users.update({
      section_hw4: score
    }, {
      where: {
        id: id
      }
    }).then(function (user) {
      return callback(null, user)
    }).catch(function (err) {
      return callback(err, null)
    })
  }

  // Update hw5
  users.updatehw5 = function (id, score, callback) {
    users.update({
      section_hw5: score
    }, {
      where: {
        id: id
      }
    }).then(function (user) {
      return callback(null, user)
    }).catch(function (err) {
      return callback(err, null)
    })
  }

  // Update hw6
  users.updatehw6 = function (id, score, callback) {
    users.update({
      section_hw6: score
    }, {
      where: {
        id: id
      }
    }).then(function (user) {
      return callback(null, user)
    }).catch(function (err) {
      return callback(err, null)
    })
  }

  return users;
};