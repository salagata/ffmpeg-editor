var ffmpeg = require("fluent-ffmpeg");

ffmpeg("klasky_csupo.mp4").output("klasky_csupo.avi")
    .on("end",() => {
        console.log("Done!")
    })
    .on("error",(error) => {
        throw error
    })
    .run();