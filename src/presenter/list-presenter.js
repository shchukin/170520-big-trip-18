import EventView from '../view/event-view.js';
import EventEditView from '../view/event-edit-view.js';
import {render} from '../render.js';

export default class ListPresenter {

  init = (listPresenterContext, eventsModel) => {

    this.eventsModel = eventsModel;
    this.eventsItems = [...this.eventsModel.getEvents()];

    render(new EventEditView(), listPresenterContext);

    for (let i = 0; i < this.eventsItems.length; i++) {
      render(new EventView(this.eventsItems[i]), listPresenterContext);
    }

  };
}
