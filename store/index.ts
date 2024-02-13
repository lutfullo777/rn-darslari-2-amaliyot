import {create} from 'zustand';
import {createJSONStorage, devtools, persist} from 'zustand/middleware';
import type {} from '@redux-devtools/extension'; // required for devtools typing
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ItemType} from '../src/Tabs';

interface BearState {
  counter: number;
  saved: ItemType[];
  increase: (by: number) => void;
  removeSaved: (by: number) => void;
  setSaved: (item: ItemType) => void;
}

const useStore = create<BearState>()(
  devtools(
    persist(
      set => ({
        counter: 0,
        saved: [],
        setSaved: (item: ItemType) =>
          set(state => ({saved: [item, ...state.saved]})),
        removeSaved: (id: number) =>
          set(state => ({saved: state.saved.filter(item => item.id !== id)})),
        increase: by => set(state => ({counter: state.counter + by})),
      }),
      {
        name: 'bear-storage',
        storage: createJSONStorage(() => AsyncStorage),
      },
    ),
  ),
);

export default useStore;
