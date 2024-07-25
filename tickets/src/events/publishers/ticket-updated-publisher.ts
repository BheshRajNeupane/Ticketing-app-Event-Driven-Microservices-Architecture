import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from "@bheshraj-ticketing/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
