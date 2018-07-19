var env = String(process.env.NODE_ENV || 'development');
//console.log(env);
if (env === 'development' || env.localeCompare('production')) {
   // console.log(env);
    var config = require('./config.json');
    var envConfig = config[env];

    Object.keys(envConfig).forEach((key) => {
        console.log(key);
        process.env[key] = envConfig[key];
    });
}