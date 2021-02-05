// || Require dependencies 
const express = require("express");

// || Assign dependencies 
const app = express();
app.use(express.static("public"));

// || Routes 
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});






// || Listener compatible with Heroku, Localhost, and A2
let port = process.env.PORT;
if (port == null || port == "") { port = 3000; };
app.listen(port, () => console.log(`Server accessible at port ${port}.`));
// || END Listener 