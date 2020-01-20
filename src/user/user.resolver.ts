import { Resolver, Query, Mutation, Args} from '@nestjs/graphql'
import { json } from 'express'
import { userDetailsOutput, userListOutput, userListInput, userAddOutput, userUpdateInput } from './user.dto'
import { UserService } from './user.service'
import {IUserResolver} from './user.interface'

@Resolver()
export class UserResolver implements IUserResolver{

  constructor(
    private readonly userService: UserService,
  ) {}

  

  @Query(() => userListOutput)
  async allUsers(): Promise<userListOutput> {
    let users =  await this.userService.getUser();
    console.log(users,'users list');
    const userOutput = new userListOutput(users)
    return userOutput;
  }



  @Mutation(() => userAddOutput)
  async addUser(@Args('input') input: userListInput): Promise<userAddOutput>{
    const userAdd = await this.userService.addUser(input)
    console.log(userAdd,'userAdd')
    return userAdd;
  }

  @Mutation(() => userAddOutput)
  async updateUser(@Args('input') input: userUpdateInput): Promise<userAddOutput>{
    const userAdd = await this.userService.updateUser(input)
    return userAdd;
  }

  


  


 
}