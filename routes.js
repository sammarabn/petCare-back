import { Router } from "express";

import {
    saveTutor,
    getTutor
  } from "./controllers/tutorController.js";

const routes = Router();

routes.post("/tutor", saveTutor);
routes.get("/tutor", getTutor);
/*routes.delete("/tutor", deleteTutor);
routes.patch("/tutor", patchTutor);
routes.update("/tutor", updateTutor);*/

export default routes;