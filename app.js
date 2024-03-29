// || Require dependencies 
const express = require("express");

// || Assign dependencies 
const app = express();
app.use(express.static(__dirname));

// || Routes 
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

// Listener
let port = process.env.PORT;
if (port == null || port == "") { port = 3000; };
app.listen(port, () => console.log(`Server accessible at port ${port}.`));

// END of document
