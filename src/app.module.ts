import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GetDatasModule } from './get-datas/get-datas.module';

@Module({
  imports: [GetDatasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
