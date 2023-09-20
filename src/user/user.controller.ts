import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards,Request } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from 'src/entities/user.dto';
import { User } from 'src/entities/user';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}
    @Post()
    create(@Body() user: UserDto):Promise<User> {
        return this.userService.create(user);
    }
    @Get()
    getAll(): Promise<User[]> {
        return this.userService.getAll();
    }
    @Get(':id')
    getById(@Param('id', ParseIntPipe)id: number):Promise<User> {
        return this.userService.getById(id);
    }
   
    @Delete(':id')
    delete(@Param('id', ParseIntPipe)id: number):Promise<User> {
        return this.userService.delete(id);
    }
    @Put(':id')
    update(@Param('id', ParseIntPipe)id: number, @Body() user: UserDto):Promise<User> {
        return this.userService.update(id, user);
    }
    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req:any) {
      return req.user;
    }
    
}
