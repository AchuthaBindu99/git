import express from "express"
import bodyParser from "body-parser"

const app = express()

const port = 8080

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))


app.get("/home/:item" , (req, resp) => {
    
    const item = req.params.item
    console.log(item)
    if(item == 1){
        resp.send("hi")
    }
    else{
        resp.send("wrong item")
    }
    
})

app.get("/home", (req, resp)=>{


    const item = req.query.username
    if(item){
        resp.send(`Hi ${item}`)
    }
    else{
        resp.send('send a name as username')
    }
}

    

)


app.listen(port, () => {
    console.log("App listens on ", port)
})