import { Publisher, Subjects, TicketCreatedEvent } from '@bheshraj-ticketing/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
