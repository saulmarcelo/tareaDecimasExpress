import express from "express";
import messageRouter from "./src/routes/message.router.js";
import userRouter from "./src/routes/user.router.js";
import { PORT } from "./src/configs/environment.js";
import connectDB from "./src/configs/mongo.js";

const app = express();

app.use(express.json());

app.use("/users", userRouter);
app.use("/messages", messageRouter);

app.get("/", function (req, res) {
	res.send("<h1>Hola mundo</h1>");
});

async function startSever() {
	const isConnected = await connectDB();
	if (isConnected) {
		app.listen(PORT, () => {
			console.log(`Server started on ${PORT}`);
		});
	} else {
		process.exit();
	}
}

startSever();