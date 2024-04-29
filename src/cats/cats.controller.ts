import { Controller, Delete, Get, Param, Put, Body, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import {CreateCatDto} from './CreateCatDto';
import { Cat } from './interface/cat.interface';

@Controller('cats')
export class CatsController {

    constructor(private catsService: CatsService) {}
    // private으로할 경우 선언과 초기화가 동시에 됨 

    @Get()
    findAll(): Cat[]{
        return this.catsService.findAll();
        //'this action returns all cats';
    }

    @Get(':id')
    findOne(@Param('id') id:string):string{
        return `this action returns a #${id}`;
    }

    @Post()
    create(@Body() createCatDto:CreateCatDto){
        return this.catsService.create(createCatDto);

    }
    @Put(':id')
    update(@Param('id') id:string, @Body() createCatDto:CreateCatDto){
        return `this action update #${id}`;
    }
    @Delete(':id')
    remove(@Param(':id')id:string){
        return `this action removes a #${id}`;
    }
}
