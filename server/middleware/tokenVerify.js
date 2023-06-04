const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const token = req.header("Authorization");
  
    if (!token) {
      return res.status(401).json({ error: "Access denied. No token provided." });
    }
  
    try {
      const decoded = jwt.verify(token, "your-secret-key");
      console.log(decoded);
  
      if (decoded.email !== "admin@gmail.com") {
        return res.status(403).json({ error: "Access denied. Admin access required." });
      }
  
      req.user = decoded;
      next();
    } catch (error) {
      res.status(401).json({ error: "Invalid token." });
    }
  };
  
    module.exports = verifyToken;