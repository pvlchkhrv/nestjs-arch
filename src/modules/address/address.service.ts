import { Injectable } from '@nestjs/common';
import { IDataServices } from '../core/abstracts';
import { AddressFactoryService } from './address-factory.service';
import { Address } from '../core/entities';
import { CreateAddressDto, UpdateAddressDto } from '../core/dtos/address.dto';

@Injectable()
export class AddressService {
  constructor(
    private dataServices: IDataServices,
    private addressFactoryService: AddressFactoryService,
  ) {}

  getAllAddresses(): Promise<Address[]> {
    return this.dataServices.addresses.getAll();
  }

  getAddressById(id: any): Promise<Address> {
    return this.dataServices.addresses.getById(id);
  }

  createAddress(createAddressDto: CreateAddressDto): Promise<Address> {
    const address =
      this.addressFactoryService.createNewAddress(createAddressDto);
    return this.dataServices.addresses.create(address);
  }

  updateAddress(
    authorId: string,
    updateAuthorDto: UpdateAddressDto,
  ): Promise<Address> {
    const author = this.addressFactoryService.updateAddress(updateAuthorDto);
    return this.dataServices.addresses.update(authorId, author);
  }
}
