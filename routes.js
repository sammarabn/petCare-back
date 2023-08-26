import { Router } from "express";
import { auth } from "./controllers/auth.js";

import {
    saveTutor,
    login
} from "./controllers/tutorController.js";

const routes = Router();

routes.post("/tutor", (req, res) => {
  saveTutor(req, res)
});

routes.post("/login", (req, res) => {
  login(req, res), auth
});
// routes.patch("/tutor", patchTutor);
// routes.update("/tutor", updateTutor);

// routes.post("/pet", savePet);
// routes.get("/pet", getPet);
// routes.delete("/pet", deletePet);
// routes.patch("/pet", patchPet);
// routes.update("/pet", updatePet);

// routes.post("/medicine", saveMedicine);
// routes.get("/medicine", getMedicine);
// routes.delete("/medicine", deleteMedicine);
// routes.patch("/medicine", patchMedicine);
// routes.update("/medicine", updateMedicine);

// routes.post("/surgery", saveSurgery);
// routes.get("/surgery", getSurgery);
// routes.delete("/surgery", deleteSurgery);
// routes.patch("/surgery", patchSurgery);
// routes.update("/surgery", updateSurgery);

// routes.post("/condition", saveCondition);
// routes.get("/condition", getCondition);
// routes.delete("/condition", deleteCondition);
// routes.patch("/condition", patchCondition);
// routes.update("/condition", updateCondition);

export default routes;