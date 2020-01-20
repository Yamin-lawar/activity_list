import { Injectable, HttpException, HttpCode } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { User } from './user.schema'
import { Model } from 'mongoose'
import {userListInput, userAddOutput, userUpdateInput} from './user.dto'
import {IUserService} from './user.interface'

@Injectable()
export class UserService implements IUserService{
  constructor(@InjectModel('users') private readonly userModel: Model<User>){} 
  
  async getUser(): Promise<User[]> {
      const users = await this.userModel.find().exec();
      return users;
  }

  async addUser(input: userListInput): Promise<userAddOutput> {
    const userInsert = await this.userModel.create(input);
    const response = new userAddOutput(userInsert,'User added successfully',200)
    return response;
  }

  async updateUser(input: userUpdateInput): Promise<userAddOutput> {
    console.log(input.id,'input.id')
    const users = await this.userModel.findOne({_id:input.id}).exec();
    console.log(users,'users list')
    if(users){
      const userUpdate = await this.userModel.create(input);
      const response = new userAddOutput(userUpdate,'User updated successfully',200)
      return response;
    }else{
       throw new HttpException('Problem in updating user',500)
    }
    
  }
}
