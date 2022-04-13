import { Test, TestingModule } from '@nestjs/testing';
import { InfoFactoryService } from './info-factory.service';

describe('InfoFactoryService', () => {
  let service: InfoFactoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InfoFactoryService],
    }).compile();

    service = module.get<InfoFactoryService>(InfoFactoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
