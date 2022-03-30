import { Body, Controller, Get } from '@nestjs/common';
import { GetDatasService } from './get-datas.service';

@Controller('get')
export class GetDatasController {
  constructor(private getDatasService: GetDatasService) {}
  @Get('/get')
  getDataFromPuppeteer(@Body() pesquisa: { param: string }) {
    return this.getDatasService.getData(pesquisa.param);
  }
}
