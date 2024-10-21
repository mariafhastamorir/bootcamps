import { Test, TestingModule } from '@nestjs/testing';
import { CousersController } from './cousers.controller';

describe('CousersController', () => {
  let controller: CousersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CousersController],
    }).compile();

    controller = module.get<CousersController>(CousersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
