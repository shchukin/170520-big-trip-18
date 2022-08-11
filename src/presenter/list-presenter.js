import EventView from '../view/event.js';
import EventEditView from '../view/event-edit.js';
import {render} from '../render.js';

const listItemsAmount = 3;

export default class ListPresenter {

  init = (listPresenterContext) => {


    render(new EventEditView(), listPresenterContext);

    for (let i = 0; i < listItemsAmount; i++) {
      render(new EventView(), listPresenterContext);
    }

  };
}
