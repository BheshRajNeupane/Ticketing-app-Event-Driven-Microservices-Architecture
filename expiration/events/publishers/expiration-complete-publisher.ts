import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@bheshraj-ticketing/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
