import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import {UserModule} from './user/user.module'
import { MongooseModule } from '@nestjs/mongoose';
import { encryptionMiddleware } from './middleware/encrpyptionMiddleware';

@Module({
  imports: [
    UserModule,
    MongooseModule.forRoot('mongodb+srv://dbadmin:bSzUDPYrvZOmPm6w@ticketingsystem-araam.mongodb.net/test?retryWrites=true&w=majority&authSource=admin',{ useNewUrlParser: true, useUnifiedTopology: true }),
    GraphQLModule.forRoot({
    autoSchemaFile: 'schema.gql',
    formatError(error){
      return {
        message: 'Something went wrong!!!',
        code: 500   
      }
    }
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consume:MiddlewareConsumer){
    consume.apply(encryptionMiddleware).forRoutes({path:'/graphql',method:RequestMethod.POST})
  }
}
