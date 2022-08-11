import EventView from '../view/event-view.js';
import EventEditView from '../view/event-edit-view.js';
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
