module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('users', 'twoFaEnable', {
      type: Sequelize.DataTypes.BOOLEAN,
      defaultValue: false,
    })
    await queryInterface.addColumn('users', 'twoFaSecret', {
      type: Sequelize.DataTypes.STRING,
    })
    await queryInterface.addColumn('users', 'recoveryCode', {
      type: Sequelize.DataTypes.STRING,
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.romoveColumn('users', 'twoFaEnable')
    await queryInterface.romoveColumn('users', 'twoFaSecret')
    await queryInterface.romoveColumn('users', 'recoveryCode')
  },
}
