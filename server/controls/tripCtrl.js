const getUserTrips = (req, res, next) => {
    const db = req.app.get("db");
    db
    .getUserTrips([req.user.authid])
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => {
        res.status(500);
      });
  };

module.exports = {
    getUserTrips}