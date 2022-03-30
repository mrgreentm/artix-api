import { Module } from '@nestjs/common';
import { GetDatasController } from './get-datas.controller';
import { GetDatasService } from './get-datas.service';

@Module({
  controllers: [GetDatasController],
  providers: [GetDatasService]
})
export class GetDatasModule {}
