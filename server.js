import { app } from "./app.js";
import { conntectDB } from "./DB/dataBase.js";

conntectDB();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
