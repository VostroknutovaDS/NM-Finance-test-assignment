import { Task } from '../entities/task.model';

export const todos: Task[] = [
  {
    task: 'Todo One',
    createdAt: new Date('2020-04-15'),
    favorite: false,
    timeLeft: new Date(1745264634190),
  },
  {
    task: 'Todo Two',
    createdAt: new Date('2020-05-15'),
    favorite: true,
    timeLeft: new Date(1745264799140),
  },
  {
    task: 'Todo Three',
    createdAt: new Date('2020-06-15'),
    favorite: false,
    timeLeft: new Date(1745264799140),
  },
];
