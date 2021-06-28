import { IAquariumProperties } from './aquariumPropertiesInterface';

export interface IAquarium{
    tankName: string;
    properties: IAquariumProperties;
    maintenance: Record<string, any>[];
}
