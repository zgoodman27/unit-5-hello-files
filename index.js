const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.static("public"))

// Set up route to index
app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/index.html" )
})

// Set up route to herpetology
app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/herpetology.html" )
})

// Set up route to pyrology
app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/pyrology.html" )
})

app.get("/:key",(req,res)=> {
    if (req.params = "amphibians") {
        res.sendFile(__dirname + "/public/herpetology.html" )
    }
})

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});