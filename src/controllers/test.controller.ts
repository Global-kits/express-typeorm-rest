import { TestService } from "../services/test.service";
import { BaseResponse } from "../utils/base-response";
import AutoBindMethod from "../utils/auto-bind-method";
import { TestControllerInterface } from "../interfaces/controller/test-controller.interface";

export class TestController implements TestControllerInterface {
  
  constructor(private service: TestService) {}

  @AutoBindMethod
  async get(req, res) {
    try {
      let data = await this.service.get();
      return BaseResponse.susRes(res, data, "test all data.");
    } catch (error) {
      const err = error as Error;
      return BaseResponse.errRes(res, err.message);
    }
  }
}
