import { openDB } from 'idb';

const initdb = async () =>
  openDB('pwd', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('pwd')) {
        console.log('pwd database already exists');
        return;
      }
      db.createObjectStore('pwd', { keyPath: 'id', autoIncrement: true });
      console.log('pwd database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  const pwdDB = await openDB("pwd", 1);
  const tx = pwdDB.transaction("pwd", "readwrite");
  const store = tx.objectStore("pwd");
  const request = store.put({ pwd: content });
  const result = await request;
  console.log("Data saved to the database", result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  const pwdDB = await openDB("pwd", 1);
  const tx = pwdDB.transaction("pwd", "readonly");
  const store = tx.objectStore("pwd");
  const request = store.getAll();
  const result = await request;
  console.log(result);
};

initdb();
