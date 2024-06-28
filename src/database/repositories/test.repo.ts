import {
  createTest,
  updateTest,
  TestRepoInterface,
  RepositoryInterface,
} from "../../interfaces/repository";
import { Test } from "../entities/test.entity";

export class TestRepository implements TestRepoInterface, RepositoryInterface {
  private model: Test;
  constructor(model: Test) {
    this.model = model;
  }

  get(): Object {
    try {
      return {};
    } catch (error) {
      let err = error as Error;
      throw new Error(err.message);
    }
  }
  getAll(): Object[] {
    try {
      return [{}];
    } catch (error) {
      let err = error as Error;
      throw new Error(err.message);
    }
  }

  async createTest(data: createTest) {
    try {
      let result = "create";
      return result;
    } catch (error) {
      let err = error as Error;
      throw new Error(err.message);
    }
  }

  async updateTest(id: string, data: updateTest) {
    try {
    } catch (error) {
      let err = error as Error;
      throw new Error(err.message);
    }
  }
}
