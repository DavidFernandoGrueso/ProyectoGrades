let express = require ('express ')
const bodyParser = require('body-parser ')
const Mongoose = require('mongoose ')
let cors = require(' cors')

let app = express()
let port = process.env.PORT =  3000
let routes = require("./routes")
const { json } = require("body-parser")

app.use(bodyParser.urlencoded({
    extended: true
}) )
app.use(bodyParser,json())
app.use(cors())


app.use("/api", routes)

Mongoose.connect("mongodb://localhost/pagar", {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

var db = Mongoose.connection

if(!db)
console.log("Database Error...")
else 
    console.log("Database Sucess")

app.listen(port, function(){
    console.log("server Running...")
})
