import { Publisher, OrderCreatedEvent, Subjects } from '@bheshraj-ticketing/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
