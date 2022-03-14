# BackendNodejs

# Fundamentos

Ejercicios con Nodejs

## Installation

Clonar.

```bash
npm install 
npm install -g nodemon

npm install -g pm2
```

## Usage

```nodejs
NOMBRE=PAULO, WEB=bittronic.net nodemon Fundamentos/entornos.js 

NOMBRE=PAULO, WEB=bittronic.net pm2 start Fundamentos/entornos.js 
```
## pm2
Runtime Edition

        PM2 is a Production Process Manager for Node.js applications
                     with a built-in Load Balancer.

                Start and Daemonize any application:
                $ pm2 start app.js

                Load Balance 4 instances of api.js:
                $ pm2 start api.js -i 4

                Monitor in production:
                $ pm2 monitor

                Make pm2 auto-boot at server restart:
                $ pm2 startup

                To go further checkout:
                http://pm2.io/

## License
[MIT](https://choosealicense.com/licenses/mit/)