const base64Url = require('base64url');

const header: { alg: string; typ: string } = {
  alg: 'HS256', // HMAC + SHA256 clave secreta usado en bitcoin
  typ: 'JWT',
};

const payload: { username: string; name: string; exp: number } = {
  username: 'user1@user.com',
  name: 'Juan Carlos',
  exp: new Date().getTime(), //timestamp
};

const headerEncoded = base64Url.encode(JSON.stringify(header));
const payloadEncoded = base64Url.encode(JSON.stringify(payload));

// console.log(headerEncoded, payloadEncoded);

// firma
const key = 'abcd123456';

//certificado - llave privada y otra publica

const crypt = require('crypto');

const signature = crypt
  .createHmac('sha256', key)
  .update(`${headerEncoded}.${payloadEncoded}`)
  .digest('bin');

console.log(
  `${headerEncoded}.${payloadEncoded}.${base64Url.encode(signature)}`,
);
