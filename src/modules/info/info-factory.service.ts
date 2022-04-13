import { Injectable } from '@nestjs/common';
import { Info } from '../core/entities';
import { CreateInfoDto, UpdateInfoDto } from '../core/dtos/info.dto';

@Injectable()
export class InfoFactoryService {
  createNewInfo(createInfoDto: CreateInfoDto) {
    const newInfo = new Info();
    newInfo.email = createInfoDto.email;
    newInfo.firstName = createInfoDto.firstName;
    newInfo.lastName = createInfoDto.lastName;
    newInfo.phone = createInfoDto.phone;
    newInfo.picture = createInfoDto.picture;

    return newInfo;
  }

  updateInfo(updateInfoDto: UpdateInfoDto) {
    const updatedInfo = new Info();
    updatedInfo.email = updateInfoDto.email;
    updatedInfo.firstName = updateInfoDto.firstName;
    updatedInfo.lastName = updateInfoDto.lastName;
    updatedInfo.phone = updateInfoDto.phone;
    updatedInfo.picture = updateInfoDto.picture;

    return updatedInfo;
  }
}
