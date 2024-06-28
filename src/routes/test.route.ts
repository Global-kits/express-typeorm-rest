import express, { Express } from "express";
import { TestController } from "../controllers";
import { Test } from "../database/entities/test.entity";
import { TestRepository } from "../database/repositories/test.repo";
import { TestService } from "../services";

const model = new Test();
const repo = new TestRepository(model);
const service = new TestService(repo);
const controller = new TestController(service);
const routeName = "/test";

export default (router: Express, prefix: string) => {
  router.get(prefix + routeName, controller.get);
  router.get("/abc", (req, res) => {
    return res.json("hello testing auth route");
  });
  return;
};
