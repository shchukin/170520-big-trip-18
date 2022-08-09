import TripFiltersView from './view/trip-filters-view.js';
import TripSortView from './view/trip-sort-view.js';
import EventEditView from './view/event-edit.js';
import {render} from './render.js';

const tripControlsFiltersElement = document.querySelector('.trip-controls__filters');
const tripEventsSortElement = document.querySelector('.trip-events__trip-sort');
const pageBodyContainerElement = document.querySelector('.page-body__page-main .page-body__container');

/* Компоненты на своих местах */
render(new TripFiltersView(), tripControlsFiltersElement);
render(new TripSortView(), tripEventsSortElement);

/* Компоненты временно отрендеренные в контейнере */
render(new EventEditView(), pageBodyContainerElement);
