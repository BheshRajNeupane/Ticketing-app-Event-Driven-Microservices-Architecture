import express from "express";
import { currentUser } from "@bheshraj-ticketing/common";
const router = express.Router();

router.get("/api/users/currentuser", currentUser, (req, res) => {
  console.log("current", req.session?.jwt);
  res.send({ currentUser: req.currentUser || null });
});

export { router as currentUserRouter };
