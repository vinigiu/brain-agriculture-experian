class CultureDataResponseDto {
  id: string;

  name: string;
}

class ListAllCulturesResponseDto {
  cultures: Array<CultureDataResponseDto>;
}

export { CultureDataResponseDto, ListAllCulturesResponseDto };
