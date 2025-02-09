const express = require("express");
const cors = require("cors");
const { exec } = require("child_process");

const app = express();
app.use(cors());
app.use(express.json());


app.post("/move", (req, res) => {
    const { move } = req.body;

    exec(`./game ${move}`, (error, stdout, stderr) => {
        if (error) {
            // console.log(`Error: ${error.message}`);
            console.error(`Error: ${error.message}`);
            return res.status(500).json({ error: error.message });
        }
        if (stderr) {
            // console.log(`stderr: ${stderr}`);
            console.error(`stderr: ${stderr}`);
            return res.status(500).json({ error: stderr });
        }
        res.json({ output: stdout });
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
