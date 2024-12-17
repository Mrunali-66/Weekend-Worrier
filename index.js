import express from "express";

const app = express();
const port = 3000; 

app.get ("/", (req, res) =>{ 
    const today = new Date();
    const day = today.getDay();

    //console.log(day)
    let type = "A Weekday";
    let adv = "It's time to work hard"

    if(day === 0 || day === 6){
        type = "The Weekend";
        adv = "It's time to relax and enjoy the beauty of nature"
    }
    res.render("index.ejs", {
        dayType: type,
         advice: adv,
     });
});

app.listen(port,() => {
    console.log(`Server running on port ${port}`);
    });
