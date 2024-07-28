import { Subjects, Publisher, PaymentCreatedEvent } from '@bheshraj-ticketing/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
