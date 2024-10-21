import { Controller, Get, Param, Query  } from '@nestjs/common';
import { AppService } from './app.service';
import { get } from 'http';
import { Student } from './entidades/Student';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  //Endpoint
  @Get ("/ejemplo")
  ejemplo(): string {
    return "ejemplo"
  }

  //Endpoint con parametros
  @Get("identificacion/:id/nombre/:nombre")
  getIdentificacion(@Param("id") id:number,
                    @Param("nombre") nom:string,
                    @Query("telefono") tel:number,
                    @Query("edad") edad:number):Student {
    return new Student(id , nom , tel , edad)
    }

  
}

