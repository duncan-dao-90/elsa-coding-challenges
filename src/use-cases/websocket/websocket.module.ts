import { Module } from '@nestjs/common';
import { WebsocketService } from './websocket.service';

@Module({
  providers: [
    {
      provide: 'WebsocketUsecaseProvider',
      useClass: WebsocketService,
    },
  ],
  exports: ['WebsocketUsecaseProvider'],
})
export class WebsocketModule {}
