const  winston= require('winston');

const loggerOne = new (winston.Logger)({
    transports: [new (winston.transports.File)({filename: 'phob.log' })],
    exitOnError: false,
    exceptionHandlers: [new winston.transports.File({ filename: 'phob-exceptions.log' })],
    colorize:true
});

const loggerTwo = new (winston.Logger)({
    transports: [new (winston.transports.File)({ filename: 'phmc.log' })],
    exitOnError: false,
    exceptionHandlers: [new winston.transports.File({ filename: 'phmc-exceptions.log' })],
    colorize:true
});



loggerOne.on('logging', function (transport, level, msg, meta) {
    console.log('Logging--'+msg);
});

loggerOne.on('logging', function (transport, level, msg, meta) {

    console.log('Logging--'+msg);
});


loggerTwo.on('error', function (err) {
    console.log('Logging--'+err);

});


loggerTwo.on('error', function (err) {
    console.log('Logging--'+err);

});


module.exports={loggerOne:loggerOne,loggerTwo:loggerTwo};