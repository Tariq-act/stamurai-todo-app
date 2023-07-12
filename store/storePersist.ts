import { createPersist } from 'mobx-persist';

export const setupStorePersist = (store, key) => {
  const persist = createPersist({
    storage: localStorage,
    jsonify: true,
    key,
  });

  persist('todos', store.todos); // Specify the property to persist

  persist.rehydrate(store).then(() => {
    console.log('Store rehydrated from local storage.');
  });
};