import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
	res.json({ message: "Hello World" });
});

app.use((req, res) => {
	res.send("<h1>Page Not Found</h1>");
});

app.listen(8080, () => {
	console.log(`Server listening at PORT 8080`);
});
