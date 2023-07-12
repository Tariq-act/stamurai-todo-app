'use client';
import React, { ReactNode, createContext, useContext } from 'react';
import { makeAutoObservable } from 'mobx';
// import { todoStore, Todo } from './store';
import TodoStore from './store';

class RootStore {
  todoStore: TodoStore;

  constructor() {
    this.todoStore = new TodoStore();
    makeAutoObservable(this);
  }
}


const rootStore = new RootStore();


const RootStoreContext = createContext<RootStore>(rootStore);

export const RootStoreProvider = ({ children }: { children: ReactNode }) => {
  return (
    <RootStoreContext.Provider value={rootStore}>
      {children}
    </RootStoreContext.Provider>
  );
};

export const useRootStore = (): RootStore => {
  const store = useContext(RootStoreContext);
  if (!store) {
    throw new Error('RootStoreProvider not found');
  }
  return store;
};

// export const useRootStore = (): RootStore =>
//   useContext<RootStore>(RootStoreContext);
