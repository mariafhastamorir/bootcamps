import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BootcampsController } from './controllers/bootcamps.controller';
import { UsersController } from './controllers/users.controller';
import { ReviewsController } from './controllers/reviews.controller';
import { CousersController } from './controllers/cousers.controller';

@Module({
  imports: [],
  controllers: [AppController, BootcampsController, UsersController, ReviewsController, CousersController],
  providers: [AppService],
})
export class AppModule {}
