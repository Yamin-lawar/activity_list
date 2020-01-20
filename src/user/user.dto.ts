import {Field, InputType, ObjectType} from 'type-graphql'
import {User} from './user.schema'
import {IsString, Length, IsNotEmpty} from 'class-validator'



@ObjectType()
export class userDetailsOutput {

    constructor(name:string) {
        this.name = name;
    }

    @Field()
    readonly name:string;
}


@ObjectType()
export class userListOutput{

    constructor(users:User[]) {
        this.users = users;
        this.id = '1';
    }

    @Field(() => [User])
    readonly users:User[];

    @Field()
    readonly id:string;
}

@InputType()
export class userListInput{
    @Field()
    @IsString()
    @IsNotEmpty()
    @Length(2,255)
    readonly first_name: string;

    @Field({nullable: true})
    @IsString()
    @Length(2,255)
    readonly last_name: string;

    @Field()
    @IsString()
    @IsNotEmpty()
    @Length(2,255)
    readonly email: string;
}
@ObjectType()
export class userAddOutput{

    constructor(users:User, message:string, code:number) {
        this.users = users;
        this.message = message
        this.code = code
    }
    
    @Field()
    @IsNotEmpty()
    readonly message:string

    @Field()
    @IsNotEmpty()
    readonly code:number

    @Field(() => User)
    readonly users:User;
}

@InputType()
export class userUpdateInput{
    @Field()
    @IsString()
    @IsNotEmpty()
    readonly id: string;

    @Field()
    @IsString()
    @IsNotEmpty()
    @Length(2,255)
    readonly first_name: string;

    @Field({nullable: true})
    @IsString()
    @Length(2,255)
    readonly last_name: string;

    @Field()
    @IsString()
    @IsNotEmpty()
    @Length(2,255)
    readonly email: string;
}

@ObjectType()
export class commonErrorMessage {
    constructor(message:string) {
        this.message = message
    }

    @Field()
    @IsNotEmpty()
    readonly message:string

}


