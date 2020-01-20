import {userListInput, userAddOutput, userUpdateInput} from './user.dto'

export interface IUserResolver {
    addUser(
        input: userListInput
    ): Promise<userAddOutput>

    updateUser(
        input: userUpdateInput
    ): Promise<userAddOutput>
}

export interface IUserService {
    addUser( 
        input: userListInput
    ): Promise<userAddOutput>

    updateUser(
        input: userUpdateInput
    ): Promise<userAddOutput>
}
