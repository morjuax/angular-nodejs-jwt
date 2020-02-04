const controller = {};

controller.tasks = (req, res) => {
  let data = [
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
  ];

  res.json({
    status: 1,
    message: "Data successfully",
    data
  });
};

controller.privateTasks = (req, res) => {
  let data = [
    {
      _id: 1,
      name: "Private Task one",
      description: "Lorem ipsun",
      date: "2020-01-30"
    },
    {
      _id: 2,
      name: "Private Task two",
      description: "Lorem ipsun 2",
      date: "2020-01-30"
    },
    {
      _id: 3,
      name: "Private Task three",
      description: "Lorem ipsun 3",
      date: "2020-01-30"
    }
  ];
  res.json({
    status: 1,
    message: "Data successfully",
    data
  });
};


export default controller;
