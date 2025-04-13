import jwt from 'jsonwebtoken';

// Middleware function
export const protect = (req, res, next) => { 
  let token;
  
  // Check if the authorization header exists and starts with 'Bearer'
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Extract token from authorization header
      token = req.headers.authorization.split(' ')[1];
      
      // Verify token with secret key
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      
      // Attach user to request object (req.user)
      req.user = { id: decoded.id };
      
      // Proceed to the next middleware or route handler
      next();
    } catch (err) {
      console.error(err);
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  } else {
    // If no token is found, respond with a 401 error
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};
