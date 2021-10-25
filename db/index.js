import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('users.db');

/* const db2 = SQLite.openDatabase('orders.db');

export const initdb2 = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS orders (
          email TEXT PRIMARY KEY NOT NULL,
          password TEXT NOT NULL
        )`,
        [],
        () => { resolve() },
        (_, err) => { reject(err) },
      )
    });
  });

  return promise;
} */

export const init = () => {
    const promise = new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          `CREATE TABLE IF NOT EXISTS users (
            email TEXT PRIMARY KEY NOT NULL,
            password TEXT NOT NULL
          )`,
          [],
          () => { resolve() },
          (_, err) => { reject(err) },
        )
      });
    });
  
    return promise;
  }


  export const userRegister = (email,password) =>{
    const promise = new Promise((resolve,reject)=>{
      db.transaction((tx)=>{
        tx.executeSql('INSERT INTO users (email,password) VALUES (?,?);',
        [email,password],
        (_,result)=>resolve(result),
        (_,err)=> reject(err)
        )
      })
    })
    return promise;
  }

    
export const userLogin = (
    email,
    password
  ) => {
    const promise = new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          `SELECT * FROM users WHERE email = (?) AND password = (?)`,
          [email,password],
          (_, result) => resolve(result),
          (_, err) => reject(err),
        );
      });
    });
  
    return promise;
  } 