const env = {
  database: 'postgres',
  username: 'postgres',
  password: 'postgres',
  host: 'db-receipt-tracker.cxkcgz7wspux.us-east-2.rds.amazonaws.com',
  dialect: 'postgres',
  pool: {
	  max: 5,
	  min: 0,
	  acquire: 30000,
	  idle: 10000
  }
};
 
module.exports = env;