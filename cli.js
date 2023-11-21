require('dotenv').config()
const { Sequelize, Model } = require('sequelize')

const sequelize = new Sequelize(process.env.DATABASE_URL)

class Blog extends Model {}

Blog.init({
  id: {
    type: Sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  author: {
    type: Sequelize.DataTypes.TEXT,
  },
  url: {
    type: Sequelize.DataTypes.TEXT,
    allowNull: false
  },
  title: {
    type: Sequelize.DataTypes.TEXT,
    allowNull: false
  },
  likes: {
    type: Sequelize.DataTypes.INTEGER,
  }
}, {
  sequelize,
  underscored: true,
  timestamps: false,
  modelName: 'blog'
})

const main = async () => {
  try {
    await sequelize.authenticate()
    const blog = await sequelize.query("SELECT author, title, likes FROM blogs")
    console.log(blog[0].length)
    console.log(blog[0].forEach(blog => {
      console.log(`${blog.author}: '${blog.title}', ${blog.likes} likes`)
    }))
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

main()