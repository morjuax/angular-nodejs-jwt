const controller = {};


controller.tasks = (req, res) => {
  res.json([
    {
      _id: 1,
      name: "Task one",
      description: "Lorem ipsun",
      date: "2020-01-30"
    },
    {
      _id: 2,
      name: "Task two",
      description: "Lorem ipsun 2",
      date: "2020-01-30"
    },
    {
      _id: 3,
      name: "Task three",
      description: "Lorem ipsun 3",
      date: "2020-01-30"
    }
  ]);
};

controller.privateTasks = (req, res) => {
  res.json([
    {
      _id: 1,
      name: "Task one",
      description: "Lorem ipsun",
      date: "2020-01-30"
    },
    {
      _id: 2,
      name: "Task two",
      description: "Lorem ipsun 2",
      date: "2020-01-30"
    },
    {
      _id: 3,
      name: "Task three",
      description: "Lorem ipsun 3",
      date: "2020-01-30"
    }
  ]);
};

// TODO
const verifyToken = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).send("Unthorize Request");
  }

  let token = req.headers.authorization.split(" ")[1];
  if (token === null) {
    return res.status(401).send("Unthorize Request");
  }

  
};


export default controller;
