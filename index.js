const chalk = require('chalk');
const {WAConnection} = require('@adiwajshing/baileys');
const {StringSession} = require('./leon/');
const fs = require('fs');

async function startLeon() {
    const Leon = new WAConnection();
    const Session = new StringSession();
    Leon.version = [3, 3430, 9]
    Leon.logger.level = 'warn';
    Leon.regenerateQRIntervalMs = 50000;
    
    Leon.on('connecting', async () => {
        console.log(`${chalk.green.bold('Leon')}
${chalk.white.italic('Made By ')}${chalk.red.bold('TOXIC DEVIL')}
${chalk.blue.italic('🔄 Loading QR CODE...')}`);
    });
    

    Leon.on('open', () => {
        var st = Session.createStringSession(Leon.base64EncodedAuthInfo());
        console.log(
            chalk.green.bold('YOUR SESSION: '), Session.createStringSession(Leon.base64EncodedAuthInfo())
        );
        
        if (!fs.existsSync('config.env')) {
            fs.writeFileSync('config.env', `SESSION="${st}"`);
        }

        console.log(
            chalk.red.bold('⚠ COPY THIS CODE, IT IS IMPORTANT... ⚠'))
            
        console.log(
            chalk.blue.bold('Thank You For Using Leon 💖'))

        process.exit(0);
    });

    await Leon.connect();
}

startLeon()
