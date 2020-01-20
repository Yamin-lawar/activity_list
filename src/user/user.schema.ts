import * as mongoose from 'mongoose';
import { Model, Schema } from 'mongoose';
import { SchemaDirectiveVisitor } from 'graphql-tools';
import { ObjectType, Field } from 'type-graphql';


export const UserSchema = new mongoose.Schema({
  first_name: {type: String, required: true},
  last_name: {type: String, required: false},
  email: {type: String, required:true}
});

@ObjectType()
export class User {
    
    @Field()
    id: String;

    @Field()
    first_name: String;

    @Field()
    last_name: String;

    @Field()
    email: String;
    
}