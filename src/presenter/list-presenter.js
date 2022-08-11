import EventView from '../view/event-view.js';
import EventEditView from '../view/event-edit-view.js';
import {render} from '../render.js';

export default class ListPresenter {

  init = (listPresenterContext) => {

    const listItemsAmount = 3;

    render(new EventEditView(), listPresenterContext);

    for (let i = 0; i < listItemsAmount; i++) {
      render(new EventView(), listPresenterContext);
    }

  };
}
