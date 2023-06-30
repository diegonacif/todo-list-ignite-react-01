import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useLocalStorage } from 'usehooks-ts'

import { PlusCircle } from '@phosphor-icons/react';
import clipboard from '../../assets/Clipboard.svg';
import check from '../../assets/check.svg';
import checked from '../../assets/checked.svg';
import trash from '../../assets/trash.svg';

import '../../App.scss';

interface ITasksItem {
  id: string;
  description: string;
  isComplete: boolean;
}

export const Body = () => {
  const [taskInput, setTaskInput] = useState('');
  const [tasks, setTasks] = useLocalStorage<ITasksItem[]>('todo-tasks', []);

  console.log( tasks );

  const createTask = () => {
    const newTask: ITasksItem = {
      id: uuidv4(),
      description: taskInput,
      isComplete: false
    };

    setTasks([...tasks, newTask]);
    setTaskInput('');
  }

  const deleteTask = (id: string) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  }

  const toggleIsComplete = (id: string) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          isComplete: !task.isComplete,
        };
      }
      return task;
    });

    setTasks(updatedTasks);
  }

  return (
    <div className="body-container">
      <header id="todo-header">
        <div className="input-wrapper">
          <input 
            type="text" 
            placeholder="Adicione uma nova tarefa" 
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
          />
          <button onClick={() => createTask()}>
            <span>Criar</span>
            <PlusCircle size={19} weight="bold" />
          </button>
        </div>
      </header>
      <section id="todo-content">
        <div className="info-wrapper">
          <div className="info-status">
            <span className="info-title">Tarefas criadas</span>
            <div className="counter-wrapper">
              <span>{tasks.length}</span>
            </div>
          </div>
          <div className="info-status">
            <span className="info-title done">Concluídas</span>
            <div className="counter-wrapper">
              <span>{tasks.filter(task => task.isComplete === true).length}</span>
            </div>
          </div>
        </div>
        {
          tasks.length === 0 ?
          <div className="empty-wrapper">
            <img src={clipboard} alt="clipboard" />
            <h4>Você ainda não tem tarefas cadastradas</h4>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div> :
          <div className="tasks-wrapper">
            {
              tasks.map((task) => (
                <div className="task-line" key={task.id}>
                  {
                    task.isComplete ?
                    <img src={checked} alt="check is marked" className="check-icon" onClick={() => toggleIsComplete(task.id)} /> :
                    <img src={check} alt="check is not marked" className="check-icon" onClick={() => toggleIsComplete(task.id)} />
                  }
                  <p className={task.isComplete ? 'description-completed' : ''}>{task.description}</p>
                  <img 
                    src={trash} 
                    alt="delete icon" 
                    id="delete-icon" 
                    onClick={() => deleteTask(task.id)} 
                  />
                </div>
              ))
            }
          </div>
        }
      </section>
    </div>
  )
}
