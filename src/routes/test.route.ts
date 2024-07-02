import express, { Express, Router } from "express";
import { TestController } from "../controllers";
import { Test } from "../database/entities/test.entity";
import { TestRepository } from "../database/repositories/test.repo";
import { TestService } from "../services";

const router = Router();

const model = new Test();
const repo = new TestRepository(model);
const service = new TestService(repo);
const controller = new TestController(service);
const routeName = "/test";


router.get(routeName, controller.get);
router.get("/abc", (req, res) => {
  return res.json("hello testing auth route");
});

export default router;