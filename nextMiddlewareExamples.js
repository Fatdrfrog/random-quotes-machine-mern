const checkForAuthMiddleware = (req, res, next) => {
  console.log("Check for security auth");
  const check = true;

  if (check === true) {
    req.newUser = "Serik";
    next();
  } else {
    res.status(400).send("auth is wrong");
  }
};

const responseToClients = (req, res, next) => {
  console.log("response:");
  res.json({ connected: req.newUser });
};
