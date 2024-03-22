export const orderOptions = [
  {
    id: 0,
    value: 0,
    text: 'Latest repositories',
    variable: {
      orderBy: 'CREATED_AT',
    },
  },
  {
    id: 1,
    value: 1,
    text: 'Highest rated repositories',
    variable: {
      orderBy: 'RATING_AVERAGE',
      orderDirection: 'DESC',
    },
  },
  {
    id: 2,
    value: 2,
    text: 'Lowest rated repositories',
    variable: {
      orderBy: 'RATING_AVERAGE',
      orderDirection: 'ASC',
    },
  },
];