import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { CreatCatDto } from './creat-cat.dto';
import { UpdateCatDto } from './update-cat.dto';


@Controller('cats')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post()
  async create(@Body() creatCatDto: CreatCatDto) {
    return 'this actions adds a new cat'
  }

  @Get()
  findAll(@Body() Body: CreatCatDto) {
    return Body.name;
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    console.log(id);
    return `this returns the id of ${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `this request update the id: ${id}`;
  }

  @Get()
  filter(@Query('age') age: number, @Query('breed') breed: string) {
    return `this request filters query by age ${age} and breed: ${breed}`
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `this removes the #${id}`;
  }
}
