import settings from '../settings/index';

const { POSTER_URL } = settings;

export const generatePosterPath = imageName => `${POSTER_URL}${imageName}`;
