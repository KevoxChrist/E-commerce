const mysql = require('mysql2/promise');
const { Client } = require('ssh2');
const fs = require('fs');
require('dotenv').config();

let dbPool = null;
let sshClient = null;

async function connectDatabase() {
  if (dbPool) return dbPool;

  return new Promise((resolve, reject) => {
    console.log('🔄 Starting connection process...');
    
    // Validate environment variables
    const required = ['SSH_HOST', 'SSH_USER', 'SSH_KEY_PATH', 'DB_HOST', 'DB_PORT', 'DB_USER', 'DB_PASSWORD', 'DB_NAME'];
    const missing = required.filter(key => !process.env[key]);
    
    if (missing.length > 0) {
      const error = `Missing environment variables: ${missing.join(', ')}`;
      console.error('❌', error);
      return reject(new Error(error));
    }

    sshClient = new Client();

    sshClient.on('ready', () => {
      console.log('✅ SSH tunnel established');

      sshClient.forwardOut(
        '127.0.0.1', //Local Host
        0,
        process.env.DB_HOST,
        parseInt(process.env.DB_PORT),
        async (err, stream) => {
          if (err) {
            console.error('Port forwarding error:', err.message);
            reject(err);
            return;
          }

          console.log('✅ Port forwarding created');

          try {
            dbPool = mysql.createPool({
              user: process.env.DB_USER,
              password: process.env.DB_PASSWORD,
              database: process.env.DB_NAME,
              stream: stream,
              waitForConnections: true,
              connectionLimit: 10
            });

            console.log('✅ Database pool created');
            
            // Test the connection immediately
            const [rows] = await dbPool.query('SELECT 1');
            console.log('✅ Database connection verified');
            
            resolve(dbPool);
          } catch (error) {
            console.error('Database connection error:', error.message);
            reject(error);
          }
        }
      );
    });

    sshClient.on('error', (err) => {
      console.error('❌ SSH connection failed:', err.message);
      reject(err);
    });

    console.log('Connecting to SSH...');
    
    try {
      const privateKey = fs.readFileSync(process.env.SSH_KEY_PATH);
      console.log('✅ SSH key file read successfully');
      
      sshClient.connect({
        host: process.env.SSH_HOST,
        port: 22,
        username: process.env.SSH_USER,
        privateKey: privateKey
      });
    } catch (error) {
      console.error('❌ Error reading SSH key file:', error.message);
      reject(error);
    }
  });
}




module.exports = {connectDatabase};