import { Test, TestingModule } from '@nestjs/testing';
import { GetDatasController } from './get-datas.controller';

describe('GetDatasController', () => {
  let controller: GetDatasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetDatasController],
    }).compile();

    controller = module.get<GetDatasController>(GetDatasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
