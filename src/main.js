import TripFiltersView from './view/trip-filters-view.js';
import {render} from './render.js';

const tripControlsFiltersElement = document.querySelector('.trip-controls__filters');

render(new TripFiltersView(), tripControlsFiltersElement);
