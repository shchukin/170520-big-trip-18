import {generateEvent} from '../mock/event';

export default class EventsModel {
  events = Array.from({length: 3}, generateEvent);
  getEvents = () => this.events;
}
