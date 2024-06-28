import { TestRepository } from "../database/repositories/test.repo";
import { TestServiceInterface } from "../interfaces/service/test-service.interface";

export class TestService implements TestServiceInterface {
  private repo: TestRepository;
  constructor(repo: TestRepository) {
    this.repo = repo;
  }

  async get() {
    try {
      return await this.repo.getAll();
    } catch (error) {
      let err = error as Error;
      throw new Error(err.message);
    }
  }
}
