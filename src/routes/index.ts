import { Express } from "express";
import testRoute from "./test.route";

const PREFIX = "/api";
export default (router: Express) => {
  testRoute(router, PREFIX);
  return;
};
