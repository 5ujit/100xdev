const express =require('express');
const http= require('http')
const socketIo= require('cket.io');
const cors=require('cors');
const dotenv=require('dotenv')
const {connectDB}= require('./config/db')
const socketSetup =require('./socket');

dotenv.config();

const app= express();
const server = http.createServer(app);
const io = socketIo(server);

//
app.use(cors());
app.use(express.json());

connectDB();
socketSetup(io);

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/chat', require('./routes/chatRoutes'));

// Starting the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});