import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
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
import {
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
} from '@nestjs/swagger';
import {
  ErrorBadRequestZodResponseDto,
  ErrorInternalServerResponseDto,
} from '@/infra/docs/dto/error';

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
  @ApiOperation({ summary: 'Listagem de produtores' })
  @ApiOkResponse({ type: ListAllProducersDto })
  @ApiInternalServerErrorResponse({ type: ErrorInternalServerResponseDto })
  async listAll(): Promise<ListAllProducersDto> {
    return this.listAllProducersService.execute();
  }

  @Get(':id')
  @ApiParam({ name: 'id', description: 'Id do produtor', type: String })
  @ApiOperation({ summary: 'Detalhes de um produtor específico' })
  @ApiOkResponse({ type: DetailProducersDto })
  @ApiInternalServerErrorResponse({ type: ErrorInternalServerResponseDto })
  async detail(@Param('id') id: string): Promise<DetailProducersDto> {
    return this.detailProducerService.execute(id);
  }

  @Post()
  @ApiOperation({ summary: 'Cria um registro de produtor' })
  @HttpCode(200)
  @ApiOkResponse({ type: UpdateCreateDeleteProducersDto })
  @ApiBadRequestResponse({ type: ErrorBadRequestZodResponseDto })
  @ApiInternalServerErrorResponse({ type: ErrorInternalServerResponseDto })
  async create(
    @Body(ZodPipe(createProducerSchema)) createProducerDto: CreateProducerDto,
  ): Promise<UpdateCreateDeleteProducersDto> {
    return this.createProducerService.execute(createProducerDto);
  }

  @Patch(':id')
  @ApiParam({ name: 'id', description: 'Id do produtor', type: String })
  @ApiOperation({ summary: 'Atualiza o registro de um produtor' })
  @HttpCode(200)
  @ApiOkResponse({ type: UpdateCreateDeleteProducersDto })
  @ApiBadRequestResponse({ type: ErrorBadRequestZodResponseDto })
  @ApiInternalServerErrorResponse({ type: ErrorInternalServerResponseDto })
  async update(
    @Param('id') id: string,
    @Body(ZodPipe(updateProducerSchema)) updateProducerDto: UpdateProducerDto,
  ): Promise<UpdateCreateDeleteProducersDto> {
    return this.updateProducerService.execute(updateProducerDto, id);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', description: 'Id do produtor', type: String })
  @ApiOperation({ summary: 'Exclui o registro de um produtor' })
  @HttpCode(200)
  @ApiOkResponse({ type: UpdateCreateDeleteProducersDto })
  @ApiInternalServerErrorResponse({ type: ErrorInternalServerResponseDto })
  async delete(
    @Param('id') id: string,
  ): Promise<UpdateCreateDeleteProducersDto> {
    return this.deleteProducerService.execute(id);
  }
}

export { ProducersController };
