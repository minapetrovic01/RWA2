import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthSignInUserDto } from './dtos/auth-sign-in-dto';
import { UserDto } from 'src/entities/user.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }

    // @Post('signup')
    // signUp(@Body() signUpDto: UserDto) {
    //     return this.authService.signUp(signUpDto);
    // }

    // @Post('signin')
    // signIn(@Body() signInDto: AuthSignInUserDto) {
    //     return this.authService.signIn(signInDto);
    // }

    // @UseGuards(AuthGuard('jwt'))
    // @Get('guardtest')
    // getUser(@Req() req : Request) {
    //     return req.user;
    // }

}
