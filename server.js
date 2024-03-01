const express = require("express")

const app = express()

const port = 8080

app.listen(port, () => {
    console.log("App listens on ", port)
})

app.get("/home" , (req, resp) => {
    console.log("request sent to browser")
    resp.send("Hello from server")
})

app.post("/home", (req,resp) => {
    console.log("browser requested for post api")
    resp.send("Hello request")
})