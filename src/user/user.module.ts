import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver'
import { MongooseModule } from '@nestjs/mongoose';
import {UserSchema, User} from './user.schema'
import { UserService } from './user.service';


@Module({
  imports:[MongooseModule.forFeature([{name:'users', schema: UserSchema}])],
  providers: [ UserResolver,UserService],
})
export class UserModule {}
