import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import {
  CreateProducerService,
  DeleteProducerService,
  DetailProducerService,
  ListAllProducersService,
  UpdateProducerService,
} from '../../application/services';
import { UpdateCreateDeleteProducersDto } from '../../dto/response/updateCreateDeleteProducer.dto';
import { ListAllProducersDto } from '../../dto/response/listAllProducers.dto';
import { DetailProducersDto } from '../../dto/response/detailProducer.dto';
import { ZodPipe } from '@/infra/pipes/zod-validation-pipe';
import { createProducerSchema } from '../../application/schemas/createProducerSchema';
import { updateProducerSchema } from '../../application/schemas/updateProducerSchema';
import { CreateProducerDto, UpdateProducerDto } from '../../dto/request';

@Controller('producers')
class ProducersController {
  constructor(
    private readonly listAllProducersService: ListAllProducersService,
    private readonly detailProducerService: DetailProducerService,
    private readonly createProducerService: CreateProducerService,
    private readonly updateProducerService: UpdateProducerService,
    private readonly deleteProducerService: DeleteProducerService,
  ) {}

  @Get()
  async listAll(): Promise<ListAllProducersDto> {
    return this.listAllProducersService.execute();
  }

  @Get(':id')
  async detail(@Param('id') id: string): Promise<DetailProducersDto> {
    return this.detailProducerService.execute(id);
  }

  @Post()
  async create(
    @Body(ZodPipe(createProducerSchema)) createProducerDto: CreateProducerDto,
  ): Promise<UpdateCreateDeleteProducersDto> {
    return this.createProducerService.execute(createProducerDto);
  }

  @Patch()
  async update(
    @Body(ZodPipe(updateProducerSchema)) updateProducerDto: UpdateProducerDto,
  ): Promise<UpdateCreateDeleteProducersDto> {
    return this.updateProducerService.execute(updateProducerDto);
  }

  @Delete(':id')
  async delete(
    @Param('id') id: string,
  ): Promise<UpdateCreateDeleteProducersDto> {
    return this.deleteProducerService.execute(id);
  }
}

export { ProducersController };
