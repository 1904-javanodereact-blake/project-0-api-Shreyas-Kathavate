import { connectionPool } from '.';
import { PoolClient } from 'pg';
import { Reimbursement } from '../model/Reimbursement';
//import { convertSqlProj } from '../util/Reimbursement-converter';

export async function findReimbursementbyAuthor(userId) {
  let client: PoolClient;
  try {
    client = await connectionPool.connect();
    const result = await client.query(`select * from anime.reimbursement where author = $1 ORDER BY date_submitted ASC;`, [userId]);
    return result.rows;
  } catch (err) {
    console.log(err);
    return undefined;
  } finally {
    client && client.release();
  }
}
export async function findbystatusId(statusId) {
  let client: PoolClient;
  try {
    client = await connectionPool.connect();
    const result = await client.query('SELECT * FROM anime.reimbursement where status = $1 ORDER BY date_submitted ASC;', [statusId]);
    return result.rows;
  } catch (err) {
    console.log(err);
    return undefined;
  } finally {
    client && client.release();
  }
}
export async function updateReimbursements(reimbursement_id, author, amount,
  date_submitted, date_resolved, description, resolver, status, type) {
  let client: PoolClient;
  try {
    client = await connectionPool.connect();
    const queryString = `UPDATE anime.reimbursement
    SET author = $2, amount = $3, 
    date_submitted = $4, date_resolved = $5, description = $6,  resolver = $7, status = $8, type = $9
    WHERE user_id = $1;`;
    await client.query(queryString, [reimbursement_id, author, amount,
      date_submitted, date_resolved, description, resolver, status, type]);
  } catch (err) {
    console.log(err);
    return undefined;
  } finally {
    client && client.release();
  }
}

export async function findByReimbursement(reimbursement_id) {
  let client: PoolClient;
  try {
    client = await connectionPool.connect();
    const queryString = `SELECT * from anime.reimbursement WHERE reimbursement_id = $1;`;
    const result = await client.query(queryString, [reimbursement_id]);
    return result.rows[0];
  } catch (err) {
    console.log(err);
    return undefined;
  } finally {
    client && client.release();
  }
}
export async function postReimbursement(reimbursement: Reimbursement) {
  let client: PoolClient;
  try {
    client = await connectionPool.connect();
    console.log('This is whats passed in',reimbursement);
    const result = `INSERT INTO anime.reimbursement(author, amount, date_submitted, date_resolved, description, resolver, status, type) 
    VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`;
    const inp = await client.query(result, [reimbursement.author, reimbursement.amount, reimbursement.date_Submitted, 
      reimbursement.date_Resolved, reimbursement.description, reimbursement.resolver, reimbursement.status, reimbursement.type]);
    console.log(inp.rows);
    return inp.rows;
  } catch (err) {
    console.log(err);
    return undefined;
  } finally {
    client && client.release();
  }
}