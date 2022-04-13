import { Injectable } from '@nestjs/common';
import { IDataServices } from '../core/abstracts';
import { InfoFactoryService } from './info-factory.service';
import { Info } from '../core/entities';
import { CreateInfoDto, UpdateInfoDto } from '../core/dtos/info.dto';

@Injectable()
export class InfoService {
  constructor(
    private dataServices: IDataServices,
    private infoFactoryService: InfoFactoryService,
  ) {}

  getAllInfos(): Promise<Info[]> {
    return this.dataServices.infos.getAll();
  }

  getInfoById(id: string): Promise<Info> {
    return this.dataServices.infos.getById(id);
  }

  createInfo(createInfoDto: CreateInfoDto): Promise<Info> {
    const info = this.infoFactoryService.createNewInfo(createInfoDto);
    return this.dataServices.infos.create(info);
  }

  updateInfo(authorId: string, updateInfoDto: UpdateInfoDto): Promise<Info> {
    const author = this.infoFactoryService.updateInfo(updateInfoDto);
    return this.dataServices.infos.update(authorId, author);
  }
}
