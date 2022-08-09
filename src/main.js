import TripFiltersView from './view/trip-filters-view.js';
import TripSortView from './view/trip-sort-view.js';
import {render} from './render.js';

const tripControlsFiltersElement = document.querySelector('.trip-controls__filters');
const tripEventsSortElement = document.querySelector('.trip-events__trip-sort');

render(new TripFiltersView(), tripControlsFiltersElement);
render(new TripSortView(), tripEventsSortElement);
