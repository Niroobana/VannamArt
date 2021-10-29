const app = require('./app')
const connectDatabase = require('./config/database')

const dotenv = require('dotenv');

//setting up config file
dotenv.config({ path: 'backend/config/config.env' })
const cloudinary = require('cloudinary')

//connecting to database
connectDatabase();

// Setting up cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

// app.listen(process.env.PORT, () => {
//     console.log(`Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`)
// })
////////////////////////////////////////////////////////////
// const app = require('./app')
// const connectDatabase = require('./config/database')

// Handle Uncaught exceptions
process.on('uncaughtException', err => {
  console.log(`ERROR: ${err.message}`);
  console.log('Shutting down due to uncaught exception');
  process.exit(1)
})




//  const dotenv= require('dotenv');

// Setting up config file
if (process.env.NODE_ENV !== 'PRODUCTION') require('dotenv').config({ path: 'backend/config/config.env' })

//   // Connecting to database
 //connectDatabase();
// // Route
 app.use("/user", require("./routes/user"));

const server = app.listen(process.env.PORT,()=>{
    console.log(`Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`)
});
// Handle Unhandled Promise rejections
process.on('unhandledRejection', err => {
  console.log(`ERROR: ${err.message}`);
  console.log('Shutting down the server due to Unhandled Promise rejection');
  server.close(() => {
      process.exit(1)
  })
})