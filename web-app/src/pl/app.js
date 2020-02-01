const express = require('express')
const expressHandlebars = require('express-handlebars')
const humansRouter = require('./routers/humansRouter')

const app = express()

app.set("views", "src/pl/views")

app.engine("hbs", expressHandlebars({
	defaultLayout: "main.hbs"
}))

app.use("/humans", humansRouter)

app.get("/", function(request, response){
	response.render("home.hbs")
})

app.listen(8080)