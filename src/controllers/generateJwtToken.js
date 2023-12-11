import jwt from 'jsonwebtoken';

function generateJwtToken(userId) {
  
  const secretKey = '$5rfhuig!@$DTY6rfy6re'; 

  const payload = {
    userId: userId,
  };

  const options = {
    expiresIn: '1h', 
  };

  const token = jwt.sign(payload, secretKey, options);

  return token;
}



export default generateJwtToken;
