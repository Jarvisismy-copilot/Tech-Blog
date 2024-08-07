const User = require('./User');
const Project = require('./Project');

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: ''
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Project };
