import { Controller, Req, Param, Query } from '@nestjs/common';
import { Get, Post, Put, Delete } from '@nestjs/common';
import * as fs from 'fs';
import { Request } from 'express';


@Controller('crud/api/')
export class CrudController {

  getDataRoute(){
    return './src/data/DataSet.txt'
  }
  
  @Get('/done')
  getAllQueryParams(@Query() params: any) {
    const values = { ...params };
    return values;
  }

  @Get('/data')
  getData() {
    try {
      const MainData: string = fs.readFileSync(
        this.getDataRoute(),
        'utf-8',
      );
      console.log(typeof JSON.parse(MainData));
      return JSON.parse(MainData);
    } catch {
      return { ErrorMsg: 'Failed' };
    }
  }

  @Get('/element/:id')
  getDataById(@Param('id') id: string) {
    const MainData: object[] = this.getData();
    return MainData.filter((item:{id:string}) => item.id===id);
  }

  @Post('/add')
  addNewData(@Req() request: Request) {
    const { body } = request;  
    const ObjectValidation: number = Object.keys(body).length; 
    const newObject = {
      id: new Date(),
      body
    }  
    try{
      if(ObjectValidation>0){
        const MainData: object[] = this.getData();     
        const NewData: object[] = MainData.concat(newObject);
        fs.writeFileSync(this.getDataRoute(), `${JSON.stringify(NewData)}`);        
        return  NewData;
      }else{
        throw new Error;
      }
    }catch{
      return { ErrorMsg: 'Something bad happened' };
    }
  }

  @Put("/modify/:id")
  modifyDataById(@Param('id') id: string,@Req() request: Request) {
    const { body } = request;  
    const ObjectValidation: number = Object.keys(body).length;
    try {
      if(ObjectValidation>0){               
        const MainData: object[] = this.getData();
        const modifyObject: object = MainData.filter((item:{id:string}) => item.id===id)[0];
        const NewData = {...modifyObject,
          body};
        fs.writeFileSync(this.getDataRoute(), `${JSON.stringify(NewData)}`);
        return  NewData;
      }else{
        throw new Error;
      }
    }catch{
      return { ErrorMsg: 'Something bad happened' };
    }
  }

  @Delete("/delete/:id")
  deleteElementById(@Param('id') id: string) {
    try {
      const MainData: object[] = this.getData();
      const NewData: object[] = MainData.filter((item:{id:string}) => item.id!==id);            
      fs.writeFileSync(this.getDataRoute(), `${JSON.stringify(NewData)}`);
      return  NewData;
    }catch{
      return { ErrorMsg: 'Object not found' };
    }
  }
}
