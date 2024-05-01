const express = require('express')
const mongoose = require('mongoose')
const Article = require('./models/article')
const articleRouter = require('./routes/articles')
const methodOverride = require('method-override')
require('dotenv').config();

const app = express()
// const dbName = ;
const uri = process.env.MONGODB_URI + process.env.DB_NAME;
// mongoose.connect('mongodb://localhost:27017/BlogDB')
//mongoose.connect('mongodb://localhost/blog')
mongoose.connect(uri)
.then(() => {
    console.log("DB connected successfully")
})
.catch ((error) => console.log(error))

app.set('view engine','ejs')
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))


app.get('/', async (req, res) => {
    const articles =await Article.find().sort({
        createdAt: 'desc'
    })
    res.render('articles/index', {articles: articles})
})

app.use('/articles',articleRouter)

app.listen(process.env.PORT)