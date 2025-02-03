// Theresa Wunderlich

// Import required modules
var createError = require('http-errors'); // Error handling module
var express = require('express'); // Express.js framework
var path = require('path'); // Path module for handling file paths
var cookieParser = require('cookie-parser'); // Cookie parsing middleware
var logger = require('morgan'); // Request logging middleware

// Import route handlers
var indexRouter = require('./routes/index'); // Index route handler
var usersRouter = require('./routes/users'); // Users route handler

// Create an Express.js application instance
var app = express();

// Set up view engine
app.set('views', path.join(__dirname, 'views')); // Set views directory
app.set('view engine', 'jade'); // Set view engine to Jade

// Configure middleware
app.use(logger('dev')); // Enable request logging in development mode
app.use(express.json()); // Parse JSON requests
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded requests
app.use(cookieParser()); // Parse cookies
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from public directory

// Mount route handlers
app.use('/', indexRouter); // Mount index route handler
app.use('/users', usersRouter); // Mount users route handler

// Catch 404 errors and forward to error handler
app.use(function(req, res, next) {
  next(createError(404)); // Create a 404 error and pass it to the next middleware
});

// Error handler
app.use(function(err, req, res, next) {
  // Set locals for error page
  res.locals.message = err.message; // Set error message
  res.locals.error = req.app.get('env') === 'development' ? err : {}; // Set error object (only in development mode)

  // Render error page
  res.status(err.status || 500); // Set HTTP status code
  res.render('error'); // Render error page
});

// Export the Express.js application instance
module.exports = app;