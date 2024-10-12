function verifyToken(req, res, next) {
  const bearerheader = req.headers["authorization"];
//   console.log(bearerheader);
  if (typeof bearerheader === "undefined") {
    console.log("not verified");
    res.status(403).json({ msg: "invalid user" });
  } else {
    const bearer = bearerheader.split(" ");
    const bearertoken = bearer[1];
    req.token = bearertoken;
    // console.log(bearertoken)
    next();
  }
}
export default verifyToken;
// module.exports = verifyToken;
