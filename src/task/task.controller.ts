import { Controller, Get, Post, Req, Param, Query } from '@nestjs/common';
import * as fs from 'fs';
import { Request } from 'express';
@Controller('task')
export class TaskController {
  @Get('/done')
  onDone(@Query() params: any) {
    const values = { ...params };
    return values;
  }

  @Get('/data')
  getData() {
    try {
      const MainData: string = fs.readFileSync(
        './src/task/DataSet.txt',
        'utf-8',
      );
      console.log(typeof JSON.parse(MainData));
      return JSON.parse(MainData);
    } catch {
      return { ErrorMsg: 'Failed' };
    }
  }

  @Post('/write')
  writeData(@Req() request: Request) {
    const MainData: string = fs.readFileSync('./src/task/DataSet.txt', 'utf-8');
    const ParseData: any[] = JSON.parse(MainData);
    const { body } = request;
    console.log(ParseData);
    /* fs.appendFile('./src/task/DataSet.txt', MainData, function (err) {
      if (err) {
        console.log('Error');
      } else {
        console.log(fs.readFileSync('./src/task/DataSet.txt', 'utf-8'));
      }
    }); */
  }

  @Get('/:id')
  getHello(@Param('id') id: string): string {
    return '/task' + ` ${id}`;
  }
}
