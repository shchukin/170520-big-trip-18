import TripFiltersView from './view/trip-filters-view.js';
import TripSortView from './view/trip-sort-view.js';
import EventView from './view/event.js';
import EventEditView from './view/event-edit.js';
import {render} from './render.js';

const tripControlsFiltersElement = document.querySelector('.trip-controls__filters');
const tripEventsSortElement = document.querySelector('.trip-events__trip-sort');
const tripEventsElement = document.querySelector('.trip-events');

/* Компоненты на своих местах */
render(new TripFiltersView(), tripControlsFiltersElement);
render(new TripSortView(), tripEventsSortElement);

/* Компоненты временно отрендеренные в контейнер */
render(new EventView(), tripEventsElement);
render(new EventEditView(), tripEventsElement);
