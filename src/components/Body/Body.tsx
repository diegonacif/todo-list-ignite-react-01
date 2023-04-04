import clipboard from '../../assets/Clipboard.svg';
import '../../App.scss';
import { PlusCircle } from '@phosphor-icons/react';

export const Body = () => {
  return (
    <div className="body-container">
      <header id="todo-header">
        <div className="input-wrapper">
          <input type="text" placeholder="Adicione uma nova tarefa" />
          <button>
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
        <div className="empty-wrapper">
          <img src={clipboard} alt="clipboard" />
          <h4>Você ainda não tem tarefas cadastradas</h4>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
      </section>
    </div>
  )
}
