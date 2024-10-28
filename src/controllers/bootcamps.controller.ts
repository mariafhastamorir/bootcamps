import { Controller, Get, Param} from '@nestjs/common';

@Controller('bootcamps')
export class BootcampsController {

    @Get()
    getAllBootcamps(): string{
        return "Aqui van a mostrarse todos los bootcamps"
    }

    @Get("/:id")
    getAllBootcampsid(@Param("id") id:number): string{
        return `Aqui van a mostrarse el boot: ${id}`
    }
}
