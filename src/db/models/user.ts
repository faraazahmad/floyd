import mongoose, { mongo } from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: String,
});

export default mongoose.model('User', userSchema);