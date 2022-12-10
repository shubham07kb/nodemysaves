const nodemailer = require('nodemailer');
function makeemailjson(env){
    const etype = env.emailtype;
    if (etype == 'host') {
        emailjson = {
            host: env.emailhost,
            port: env.emailport,
            auth: {
                user: env.emailuser,
                pass: env.emailpass
            }
        };
    } else if (etype == 'service') {
        emailjson = {
            service: env.emaiservice,
            auth: {
                user: env.emailuser,
                pass: env.emailpass
            }
        };
    }
    return emailjson;
}
async function sendMailWithRes(env, res, to, subject, body, html = '') {
    if (html = '') {html = body;}
    const transporter = nodemailer.createTransport(makeemailjson(env));
    const mailConfigurations = {
        from: env.emailemail,
        to: to,
        subject: subject,
        html: html,
        text: body
    };
    await transporter.sendMail(mailConfigurations, function (error, info) {
        if (error) {
            res.send({ status: "error", statcode: 0, message: +error });
        } else {
            res.send({ status: "success", statcode: 1, message: +info });
        };
    });
}
async function sendMail(env, res, to, subject, body, html = '') {
    if (html = '') {
        html = body;
    }
    const transporter = nodemailer.createTransport(makeemailjson(env));
    const mailConfigurations = {
        from: env.emailemail,
        to: to,
        subject: subject,
        html: html,
        text: body
    };
    await transporter.sendMail(mailConfigurations, function (error, info) {
        if (error) {

        } else {

        };
    });
}
module.exports = {
    sendMailWithRes: sendMailWithRes,
    sendMail: sendMail
}