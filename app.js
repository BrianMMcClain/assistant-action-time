const express = require("express");
const bodyParser = require('body-parser');
const request = require('request');

const app = express();
app.use(bodyParser.text({type: "*/*"}));

app.post("/", function(req, res) {
    d = new Date()

    var ampm = "AM";
    var hour = d.getHours();
    if (hour > 12) {
        hour -= 12;
        ampm = "PM";
    } else if (hour == 12) {
        ampm = "PM"
    }

    var minute = d.getMinutes();
    if (minute == 0) {
        minute = "o' clock"
    }
    else if (minute < 10) {
        minute = `0${minute}`;
    }

    res.send(`The current time is ${hour} ${minute} ${ampm}`);
});

const port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log("Server started on port", port);
});