import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
const { Schema } = mongoose;

const TodoSchema = new Schema({
  task: String,
});

const Database = mongoose.model('taskList', TodoSchema);
export default Database;
