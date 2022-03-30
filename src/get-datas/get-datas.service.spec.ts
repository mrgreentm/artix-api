import { Test, TestingModule } from '@nestjs/testing';
import { GetDatasService } from './get-datas.service';

describe('GetDatasService', () => {
  let service: GetDatasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetDatasService],
    }).compile();

    service = module.get<GetDatasService>(GetDatasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
