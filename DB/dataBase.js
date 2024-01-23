import mongoose from "mongoose";

export const conntectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "CRUD",
    })
    .then((c) => {
      console.log(`DB connected with ${c.connection.host}`);
    })
    .catch((e) => {
      console.log(e);
    });
};
