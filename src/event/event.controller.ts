import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { EventService } from './event.service';
import { Event } from './event.entity';
import { EventDto } from './dto/event.dto';

@Controller('api/events')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  create(@Body('event') eventDto: EventDto): Promise<Event> {
    return this.eventService.create(eventDto as Event);
  }

  @Get()
  findAll(): Promise<Event[]> {
    return this.eventService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Event> {
    return this.eventService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.eventService.remove(id);
  }
}
