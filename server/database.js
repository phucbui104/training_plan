import Mongoose from 'mongoose';
import nconf from 'nconf';

nconf.argv().env().file({ file: './dbpath.json' });
Mongoose.connect(nconf.get('DATABASE_URL'), { useMongoClient: true }, (err) => {
  if (err) throw console.log('Error while connecting database!');// eslint-disable-line
  else console.log('Connecting database successful!');// eslint-disable-line
});

const db = Mongoose.connection;

export default db;
