import { VerfifyAreasRules } from '../types';

function isAreasValid({
  cultivableArea,
  vegetationArea,
  totalArea,
}: VerfifyAreasRules): boolean {
  return !!(cultivableArea + vegetationArea <= totalArea);
}

export { isAreasValid };
