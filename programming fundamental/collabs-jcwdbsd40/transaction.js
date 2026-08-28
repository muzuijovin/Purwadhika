const { Pool } = require('pg');
const pool = new Pool();

async function transferFunds(senderId, receiverId, amount) {
  const client = await pool.connect();

  try {
    // 1. Start the transaction
    await client.query('BEGIN');

    // 2. Deduct from sender
    const deductQuery = 'UPDATE accounts SET balance = balance - $1 WHERE id = $2 AND balance >= $1 RETURNING balance';
    const deductRes = await client.query(deductQuery, [amount, senderId]);

    if (deductRes.rowCount === 0) {
      throw new Error('Insufficient balance or sender not found');
    }

    // 3. Add to receiver
    const addQuery = 'UPDATE accounts SET balance = balance + $1 WHERE id = $2';
    await client.query(addQuery, [amount, receiverId]);

    // 4. Commit the transaction
    await client.query('COMMIT');
    console.log('Transaction completed successfully.');

  } catch (error) {
    // Roll back all changes if any query fails
    await client.query('ROLLBACK');
    console.error('Transaction failed, changes rolled back:', error.message);
  } finally {
    // Release client back to the pool
    client.release();
  }
}