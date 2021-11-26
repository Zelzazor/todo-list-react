const projects = [
    {
      id: 1,
      title: 'Actividades de INTEC',
      description: 'Aquí pondré las actividades de INTEC',
      todos: [
        {
          id: 1,
          title: 'Tarea de Aseguramiento',
          completed: true,
          date: new Date(),
          priority: 'low'
        },
      ]
    },
    {
      id: 2,
      title: 'Actividades del trabajo',
      description: 'Aquí pondré las actividades del trabajo',
      todos: [
        {
          id: 1,
          title: 'Entregar componentes',
          completed: false,
          date: new Date(),
          priority: 'medium'
        },
      ]
    },
    {
      id: 3,
      title: 'Actividades del hogar',
      description: 'Aquí pondré las actividades del hogar',
      todos: [
        {
          id: 1,
          title: 'Cocinar omelette con queso',
          completed: false,
          date: new Date(),
          priority: 'high'
        },
      ]
    }
  ];

export default projects;