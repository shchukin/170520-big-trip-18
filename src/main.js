import TripFiltersView from './view/trip-filters-view.js';
import TripSortView from './view/trip-sort-view.js';
import {render} from './render.js';
import ListPresenter from './presenter/list-presenter.js';

const tripControlsFiltersElement = document.querySelector('.trip-controls__filters');
const tripEventsSortElement = document.querySelector('.trip-events__trip-sort');
const tripEventsContent = document.querySelector('.trip-events__content');
const listPresenter = new ListPresenter();

/* Компоненты в раме сайта */
render(new TripFiltersView(), tripControlsFiltersElement);
render(new TripSortView(), tripEventsSortElement);

/* Компоненты в теле сайта */
listPresenter.init(tripEventsContent);
