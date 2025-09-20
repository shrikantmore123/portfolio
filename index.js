const express = require("express")
const app = express()
const path = require("path")

let port = 8080

app.use(express.static(path.join(__dirname, "public")))

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/views"))


app.get("/", (req, res) => {
    res.render("home.ejs")
})

app.get("*", (req, res) => {
    res.render("error.ejs")
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})