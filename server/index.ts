const serverApp = require("./App");
import app from "./App";

const port = 5005;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
