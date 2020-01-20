import { NestMiddleware } from "@nestjs/common";

export class encryptionMiddleware implements NestMiddleware{
   use(request:Request,response:Response,next:() => void){
     console.log('this is middleware')
     next()
   }
}