import {getRandomInteger} from '../utils.js';

const generateType = () => {
  const types = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];
  const randomIndex = getRandomInteger(0, types.length - 1);
  return types[randomIndex];
};

export const generateEvent = () => ({
  basePrice: getRandomInteger(100, 100),
  dateFrom: '2019-07-10T22:55:56.845Z',
  dateTo: '2019-07-11T11:22:13.375Z',
  destination: getRandomInteger(1, 100),
  id: getRandomInteger(1, 100),
  isFavorite: false,
  offers: generateType,
  type: generateType,
});
