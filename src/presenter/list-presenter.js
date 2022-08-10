import EventView from '../view/event.js';
import EventEditView from '../view/event-edit.js';
import {render} from '../render.js';

export default class ListPresenter {

  init = (listPresenterContext) => {

    render(new EventEditView(), listPresenterContext);

    for (let i = 0; i < 3; i++) {
      render(new EventView(), listPresenterContext);
    }

  };
}
