import { useState } from 'react';
import { PlusCircle } from '@phosphor-icons/react';
import clipboard from '../../assets/Clipboard.svg';
import trash from '../../assets/trash.svg';
import { v4 as uuidv4 } from 'uuid';
import '../../App.scss';

interface ITasksItem {
  id: string;
  description: string;
  isComplete: boolean;
}

export const Body = () => {
  const [taskInput, setTaskInput] = useState('');
  const [tasks, setTasks] = useState<ITasksItem[]>([]);

  console.log(tasks)

  const createTask = () => {
    const newTask: ITasksItem = {
      id: uuidv4(),
      description: taskInput,
      isComplete: false
    };

    setTasks([...tasks, newTask]);
  }

  const deleteTask = () => {
    console.log('delete task');
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
              <span>0</span>
            </div>
          </div>
          <div className="info-status">
            <span className="info-title">Concluídas</span>
            <div className="counter-wrapper">
              <span>0</span>
            </div>
          </div>
        </div>
        <div className="tasks-wrapper">
          {
            tasks.map((task) => (
              <div className="task-line" key={task.id}>
                <div className="not-complete"></div>
                <p>{task.description}</p>
                <img 
                  src={trash} 
                  alt="delete icon" 
                  id="delete-icon" 
                  onClick={() => deleteTask()} 
                />
              </div>
            ))
          }
          
        </div>
        {/* <div className="empty-wrapper">
          <img src={clipboard} alt="clipboard" />
          <h4>Você ainda não tem tarefas cadastradas</h4>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </div> */}
      </section>
    </div>
  )
}
