import type { IWidgets, IElement, IElements } from 'igrid-viewer';

export const elements: IElements = {
  e1: {
    id: 'e1',
    widgetId: 'com.usegdi.starter.logo',
    title: 'Logo',
    position: {
      x: 2,
      y: 2,
    },
    dimension: {
      x: 20,
      y: 6,
    },
    boardId: 'starter',
    flags: {},
  },
  e2: {
    id: 'e2',
    widgetId: 'com.usegdi.starter.welcome',
    title: 'Welcome',
    position: {
      x: 60 - 20,
      y: 24 - 6,
    },
    dimension: {
      x: 40,
      y: 12,
    },
    boardId: 'starter',
    flags: {},
  },
  e3: {
    id: 'e3',
    widgetId: 'com.usegdi.starter.github',
    title: 'Github',
    position: {
      x: 117,
      y: 2,
    },
    dimension: {
      x: 2,
      y: 2,
    },
    boardId: 'starter',
    flags: {},
  },
};
