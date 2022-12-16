const fs = require('fs');
var MongoClient = require('mongodb').MongoClient;
const nodemailer = require('nodemailer');
function install(file,prc) {
  const config = JSON.parse(fs.readFileSync(file));
  //app basic config
  if (config.app != undefined) {
    if (config.app.name == undefined || config.app.version == undefined || config.app.description == undefined || config.app.creator == undefined || config.app.email == undefined) {
      throw new Error('Some app parameters are missing');
    } else {
      prc.title = config.app.name;
      prc.version = config.app.version;
      prc.description = config.app.description;
      prc.creator = config.app.creator;
      prc.email = config.app.email;
    }
  } else {
    throw new Error('config.json is missing app object');
  }
  //app database config
  if (config.db != undefined) {
    if (config.db.type != undefined && (config.db.type == 'mysql' || config.db.type == 'mongo')) {
      prc.dbtype = config.db.type;
      if (config.db.type == 'mysql') {

      } else if (config.db.type == 'mongo') {
        if (config.db.mongostring != undefined && (config.db.mongostring.startsWith('mongodb://') || config.db.mongostring.startsWith('mongodb+srv://')) && config.db.dbname != undefined && config.db.dbname != '') {
          prc.mongostring = config.db.mongostring;
          prc.dbname = config.db.dbname;
          // MongoClient.connect(prc.mongostring, function(err, db) {if(err){ throw new "Error, Not able to connect, Please check your mongostring in db->mongostring";} console.log('DB setup complete');db.close();});
        } else {
          throw new Error('db is missing mongostring for type mongo');
        }
      }
    } else {
      throw new Error('db.type is not supported');
    }
  }
  //app email config
  if (config.email != undefined) {
    if (config.email.type != undefined && (config.email.type == 'host' || config.email.type == 'service')) {
      prc.emailtype = config.email.type;
      if (config.email.type == 'host') {
        if (config.email.host != undefined && config.email.port != undefined && config.email.email != undefined && config.email.auth.user != undefined && config.email.auth.pass != undefined) {
          prc.emailhost = config.email.host;
          prc.emailport = config.email.port;
          prc.emailemail = config.email.email;
          prc.emailuser = config.email.auth.user;
          prc.emailpass = config.email.auth.pass;
          emailjson = {
            host: prc.emailhost,
            port: prc.emailport,
            auth: {
              user: prc.emailuser,
              pass: prc.emailpass
            }
          };
        } else {
          throw new Error('email is missing host parameters');
        }
      } else if (config.email.type == 'service') {
        if (config.email.service != undefined && config.email.email != undefined && config.email.auth.user != undefined && config.email.auth.pass != undefined) {
          prc.emailservice = config.email.service;
          prc.emailemail = config.email.email;
          prc.emailuser = config.email.auth.user;
          prc.emailpass = config.email.auth.pass;
          emailjson = {
            service: prc.emaiservice,
            auth: {
              user: prc.emailuser,
              pass: prc.emailpass
            }
          };
        } else {
          throw new Error('email is missing service parameters');
        }
      }
      const transporter = nodemailer.createTransport(emailjson);
      const mailConfigurations = {
        from: prc.emailemail,
        to: prc.email,
        subject: 'Sending Email To check if email is working',
        text: 'Hi! There, Your mail setup is done and working fine. You can now use this email to send emails from your app.'
      };
      // transporter.sendMail(mailConfigurations, function(error, info){if (error) throw Error(error);console.log('Email setup complete');});
    } else {
      throw new Error('email type is not supported');
    }
  } else {
    throw new Error('config is missing email object');
  }
  if (config.security_keys != undefined) {
    jwt_method_array = ['HS256', 'HS384', 'HS512', 'RS256', 'RS384', 'RS512', 'ES256', 'ES384', 'ES512', 'PS256', 'PS384', 'PS512'];
    if (config.security_keys.session_key != undefined && config.security_keys.sec_cookies_method != undefined && config.security_keys.secure_transfer_encrypt_key != undefined && config.security_keys.jwt_key != undefined && config.security_keys.jwt_key_method != undefined && config.security_keys.jwt_s_key != undefined && config.security_keys.jwt_s_key_method != undefined && config.security_keys.jwt_c_key != undefined && config.security_keys.jwt_c_key_method != undefined && jwt_method_array.includes(config.security_keys.jwt_key_method) && jwt_method_array.includes(config.security_keys.jwt_s_key_method) && jwt_method_array.includes(config.security_keys.jwt_c_key_method)) {
      prc.session_key = config.security_keys.session_key;
      prc.sec_cookies_method = config.security_keys.sec_cookies_method;
      prc.secure_transfer_encrypt_key = config.security_keys.secure_transfer_encrypt_key;
      prc.jwt_key = config.security_keys.jwt_key;
      prc.jwt_key_method = config.security_keys.jwt_key_method;
      prc.jwt_s_key = config.security_keys.jwt_s_key;
      prc.jwt_s_key_method = config.security_keys.jwt_s_key_method;
      prc.jwt_c_key = config.security_keys.jwt_c_key;
      prc.jwt_c_key_method = config.security_keys.jwt_c_key_method;
      console.log("Security keys setup complete");
    } else {
      throw new Error('security_keys is missing');
    }
    if (config.manifest != undefined) {
      if (config.manifest.present != undefined && (config.manifest.present == 'y' || config.manifest.present == 'n') && config.manifest.iswebapp != undefined && (config.manifest.iswebapp == 'y' || config.manifest.iswebapp == 'n')) {
        if (config.manifest.present == 'n' && config.manifest.iswebapp == 'y') {
          throw new Error('Web app can not be installed without manifest');
        } else if (config.manifest.present == 'y') {
          if (typeof config.manifest.json == 'object') {
            prc.manifestpresent = config.manifest.present;
            prc.iswebapp = config.manifest.iswebapp;
            prc.manifestjson = JSON.stringify(config.manifest.json);
            console.log("Manifest is present");
          } else {
            throw new Error('manifest only runs with json object with name json');
          }
        } else {
          prc.manifestpresent = config.manifest.present;
          prc.iswebapp = config.manifest.iswebapp;
          prc.manifestjson = '{"name":"' + config.app.name + '", "short_name":"' + config.app.name + '"}';
        }
        console.log("Manifest setup complete");
      } else {
        throw new Error('manifest is missing or not correct for present and iswebapp');
      }
    } else {
      throw new Error('config is missing manifest object');
    }
  } else {
    throw new Error('config is missing security_keys object');
  }
}
module.exports = {
  install: install
}