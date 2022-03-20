import "dotenv/config";
import app from "./app";
import notion from "./notion";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
