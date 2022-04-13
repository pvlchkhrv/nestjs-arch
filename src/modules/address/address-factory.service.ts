import { Injectable } from '@nestjs/common';
import { Address } from '../core/entities';
import { CreateAddressDto, UpdateAddressDto } from '../core/dtos/address.dto';

@Injectable()
export class AddressFactoryService {
  createNewAddress(createAddressDto: CreateAddressDto) {
    const newAddress = new Address();
    newAddress.state = createAddressDto.state;
    newAddress.street = createAddressDto.street;
    newAddress.city = createAddressDto.city;
    newAddress.zip = createAddressDto.zip;

    return newAddress;
  }

  updateAddress(updateAddressDto: UpdateAddressDto) {
    const newAddress = new Address();
    newAddress.state = updateAddressDto.state;
    newAddress.street = updateAddressDto.street;
    newAddress.city = updateAddressDto.city;
    newAddress.zip = updateAddressDto.zip;

    return newAddress;
  }
}
