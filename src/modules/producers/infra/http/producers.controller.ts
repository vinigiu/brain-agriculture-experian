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
  async listAll() {
    return this.listAllProducersService.execute();
  }

  @Get(':id')
  async detail(@Param('id') id: string) {
    return this.detailProducerService.execute(id);
  }

  @Post()
  async create(
    @Body() createProducerDto: any,
  ): Promise<UpdateCreateDeleteProducersDto> {
    return this.createProducerService.execute(createProducerDto);
  }

  @Patch()
  async update(
    @Body() updateProducerDto: any,
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
