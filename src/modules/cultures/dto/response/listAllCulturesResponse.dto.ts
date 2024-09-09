import { ApiProperty } from '@nestjs/swagger';

class CultureDataResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}

class ListAllCulturesResponseDto {
  @ApiProperty({ isArray: true, type: CultureDataResponseDto })
  cultures: Array<CultureDataResponseDto>;
}

export { CultureDataResponseDto, ListAllCulturesResponseDto };
