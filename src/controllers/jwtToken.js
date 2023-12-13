import jwt from 'jsonwebtoken';

const secretKey = '$5rfhuig!@$DTY6rfy6re';

const jwtToken = {
  generateJwtToken: (userId) => {

    const payload = {
      userId: userId,
    };

    const options = {
      expiresIn: '30d',
    };

    const token = jwt.sign(payload, secretKey, options);

    return token;
  },
  decodeJwtToken: (token) => {

    try {
      const decodedPayload = jwt.verify(token, secretKey);
      console.log('Payload dengan verifikasi signature:', decodedPayload);
      return decodedPayload;
    } catch (error) {
      console.error('Token tidak valid:', error.message);
      return null;
    }
  },
};

export default jwtToken;
