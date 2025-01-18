import createError from 'http-errors';
import express, { json, urlencoded, static as static_ } from 'express';
import { join } from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';
import wikiRouter from "./routes/wiki.js";
import catalogRouter from "./routes/catalog.js"
import sampleRouter from "./routes/sample.js"

let app = express();
import { set, connect } from "mongoose";
set("strictQuery", false);
const mongoDB = "mongodb://localhost:27071/local_library";
async function main(){
  await connect(mongoDB);
}
main().catch((err) => console.log(err));

// view engine setup
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(static_(join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/wiki", wikiRouter);
app.use("/catalog", catalogRouter)
app.use("/sample", sampleRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
