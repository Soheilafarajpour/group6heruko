const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  /*
  mongoUri: process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' +
    (process.env.MONGO_PORT || '27017') +
    '/mernproject'
<<<<<<< HEAD
    */
   mongoUri: 'mongodb+srv://serler:serlersdm@cluster0-bwx14.mongodb.net/test?retryWrites=true&w=majority'
=======
  */
 mongoUri: 'mongodb+srv://serler:serlersdm@cluster0-bwx14.mongodb.net/test?retryWrites=true&w=majority'
 
>>>>>>> c2f9db40b2381060e6a928f0a03937e4b65d629c
}

export default config
