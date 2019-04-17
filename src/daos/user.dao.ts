import { connectionPool } from '.';
import { PoolClient } from 'pg';
import { convertSqlProj } from '../util/user-converter';

export async function UsernameLogin(username : string, password : string) {
  let client: PoolClient;
  try {
    client = await connectionPool.connect();
    const queryString = `SELECT * FROM anime.usertable WHERE user_name = $1 AND password = $2;`;
    const result = await client.query(queryString,[username, password]);
    const resultset =  result.rows[0];
    return resultset;
  } catch (err) {
    console.log(err);
    return undefined;
  } finally {
    client && client.release();
  }
}
export async function findUsernames() {
  let client: PoolClient;
  try {
    client = await connectionPool.connect();
    const result = await client.query('SELECT * FROM anime.usertable');
    const resultSet = result.rows;
    if(resultSet) {
      // const convertedResult = convertSqlProj(resultSet);
      return resultSet;
    }
    else{
      return undefined;
    } 
  } catch (err) {
    console.log(err);
    return undefined;
  } finally {
    client && client.release();
  }
}
export async function findById(id: number) {
  let client: PoolClient;
  try {
    client = await connectionPool.connect();
    const queryString = `SELECT * FROM anime.usertable WHERE user_id = $1`;
    const result = await client.query(queryString, [id]);
    console.log(result);
    const resultSet = result.rows[0];
    if(resultSet) {
      const convertedResult = convertSqlProj(resultSet);
      return convertedResult;
    }
    else{
      return undefined;
    }
    
  } catch (err) {
    console.log(err);
    return undefined;
  } finally {
    client && client.release();
  }
}
export async function updateUsernames(user_id, user_name, password, 
  firstname, lastname, email, user_role) {
  let client: PoolClient;
  try {
    client = await connectionPool.connect();
    const queryString = `UPDATE anime.usertable
    SET user_name = $2, password = $3, 
    firstname = $4, lastname = $5, email = $6,  user_role = $7
    WHERE user_id = $1;`;
    await client.query(queryString, [user_id, user_name, password, firstname, 
      lastname, email, user_role]);
  } catch (err) {
    console.log(err);
    return undefined;
  } finally {
    client && client.release();
  }
}

