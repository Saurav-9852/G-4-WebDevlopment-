const crypto = require('crypto');

// const hash = crypto.createHash('sha256').update('Saurav@123').digest('hex');
// console.log(hash);
// 895849014c9bd9c43b8a1d7b41d27f179b2812ae2f6b89117430e594416baffd



// const password = "Saurav@123";
// const salt = crypto.randomBytes(16).toString('hex');
// crypto.pbkdf2(password, salt, 10000, 64, 'sha512', (err,deliveredKey)=>{
//     console.log("Hashed Password: ", deliveredKey.toString('hex'));
// })




const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);
const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update('Secret message', 'utf-8', 'hex');
encrypted += cipher.final('hex');

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');

console.log('Encrypted:', encrypted);
console.log('Decrypted:', decrypted);



