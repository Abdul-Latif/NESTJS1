import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Payment } from './entities/payment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentService {
  constructor(@InjectRepository(Payment) private paymentRepsository: Repository<Payment>) { }
  async create(createPaymentDto: CreatePaymentDto) {
    const res = await this.paymentRepsository.save(createPaymentDto);
    return res;
  }

  async findAll() {
    return this.paymentRepsository.find();
  }

  async findOne(id: number) {
    return await this.paymentRepsository.findOneBy({ id });
  }

  async update(id: number, updatePaymentDto: UpdatePaymentDto) {
    const res = await this.paymentRepsository.update(id, updatePaymentDto);
    return res;
  }

  async remove(id: number) {
    await this.paymentRepsository.delete(id);
    return `${id} is removed`;
  }
}
