const getAllFriends = (req, res, next) => {
    const db = req.app.get("db");
    db
      .getAllFriends(req.user.authid)
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => {
        res.status(500);
      });
  };


  const getCurrUser = (req, res, next) => {
    const db = req.app.get("db");
    if (req.user) {
      db
        .getCurrentUser([req.user.authid])
        .then(response => {
          res.status(200).json(response);
        })
        .catch(err => {
          res.status(500).json({ err: 'NoUserFound' });
        });
    }else {
      return res.status(500).json({ err: 'NoUserFound' })
    }
    
  };

  const createUser = (req, res, next) => {
    const db = req.app.get("db");
    db
      .createUser()
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => {
        res.status(500);
      });
  };

module.exports = {
    getAllFriends,
    getCurrUser,
    createUser}