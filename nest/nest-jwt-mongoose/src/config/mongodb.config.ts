
import { registerAs } from '@nestjs/config';

export default registerAs('mongodb', () => ({
  uri: process.env.MONGODB_URI || 'mongodb+srv://admin:1234@cluster0.rxt52.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
}));