const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'This is project 1',
      todos: [
        {
          id: 1,
          title: 'Todo 1 -p1',
          completed: false,
          date: new Date(),
          priority: 'low'
        },
      ]
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'This is project 2',
      todos: [
        {
          id: 1,
          title: 'Todo 1 - p2',
          completed: false,
          date: new Date(),
          priority: 'medium'
        },
      ]
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'This is project 3',
      todos: [
        {
          id: 1,
          title: 'Todo 1 - p3',
          completed: false,
          date: new Date(),
          priority: 'high'
        },
      ]
    }
  ];

export default projects;