require("dotenv").config();
const { express, app, cors, morgan } = require("./models");
const { errorMiddleware, notFoundHandler } = require("./middlewares");
const { authRoute, postRoute, commentRoute, likeRoute } = require("./routes");

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/auth", authRoute);
app.use("/post", postRoute);
app.use("/comment", commentRoute);
app.use("/like", likeRoute);

app.use(errorMiddleware);
app.use("*", notFoundHandler);

const port = process.env.PORT || 8800;
app.listen(port, () => console.log(`Server running on port ${port}`));
