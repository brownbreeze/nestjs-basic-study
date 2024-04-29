import { Controller, Delete, Get, Param, Put, Body, Post } from '@nestjs/common';
import {CreateCatDto} from './CreateCatDto';
@Controller('cats')
export class CatsController {
    @Get()
    findAll(): string{
        return 'this action returns all cats';
    }

    @Get(':id')
    findOne(@Param('id') id:string):string{
        return `this action returns a #${id}`;
    }

    @Post()
    create(@Body() createCatDto:CreateCatDto){
        return 'This action adds a new cat';

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
