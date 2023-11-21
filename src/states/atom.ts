import { atom } from 'recoil';

export const isInitializedAtom = atom({
  key: 'isInitialized',
  default: false,
});

export const interactionCountAtom = atom({
  key: 'interactionCount',
  default: 0,
});
