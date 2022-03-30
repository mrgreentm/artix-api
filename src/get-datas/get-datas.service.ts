/* eslint-disable no-var */
import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';

@Injectable()
export class GetDatasService {
  async getData(param: string) {
    var arraydeinformacoes: string[] = [];
    let data: HTMLCollectionOf<Element> | string[] = [];
    const url = 'https://pt.br1lib.org/s/';
    const browser = await puppeteer.launch({
      headless: false,
    });
    const page = await browser.newPage();
    await page.goto(`${url}${param}`, { waitUntil: 'networkidle2' });
    return await page.evaluate(() => {
      arraydeinformacoes = [];
      data = document.getElementsByClassName('resItemBox');
      for (let index = 0; index < data.length; index++) {
        const element = data[index]?.textContent;
        arraydeinformacoes.push(element);
      }
      for (let index = 0; index < arraydeinformacoes.length; index++) {
        arraydeinformacoes = arraydeinformacoes.map((element) =>
          element.replace('\n', ''),
        );
      }
      return arraydeinformacoes;
    });

    await browser.close();
  }
}
