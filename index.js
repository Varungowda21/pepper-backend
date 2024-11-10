import express from "express";
import ConfigureDB from "./config/db.js";
import cors from "cors";
import formCtrl from "./app/controllers/form-ctrl.js";
import dotenv from "dotenv";
dotenv.config();
ConfigureDB();
const port = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cors());

app.get("/api/form", formCtrl.getAllForm);
app.get("/api/form/view/:id", formCtrl.viewForm);
app.post("/api/form/create", formCtrl.createForm);
app.put("/api/form/edit/:id", formCtrl.editForm);
app.delete("/api/form/delete/:id", formCtrl.deleteForm);

app.listen(port, () => {
  console.log("server running on port " + port);
});
