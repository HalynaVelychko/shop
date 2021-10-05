import { InjectionToken } from '@angular/core';
import { GeneratorsService  } from './generators.service';

export const GeneratorFactory = (n: number) => (generatorService: GeneratorsService) => generatorService.generate(n);
export const generatedString = new InjectionToken('generatedString');
