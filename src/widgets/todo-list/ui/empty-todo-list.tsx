import noteImage from '../../../shared/assets/images/note.png';
import styles from './styles.module.css';
import { useStore } from '../../../app/providers';

const EmptyTodoList = () => {
  const { state } = useStore();

  const getMessage = () => {
    switch (state.filter) {
      case 'active':
        return {
          title: 'У вас нет активных задач',
          description: 'Добавьте новые задачи, чтобы увидеть их здесь',
        };
      case 'completed':
        return {
          title: 'У вас нет завершенных задач',
          description: 'Завершите задачи, чтобы увидеть их в этом списке',
        };
      case 'all':
      default:
        return {
          title: 'У вас еще нет созданных задач',
          description: 'Создавайте задачи и организуйте свои дела',
        };
    }
  };

  const { title, description } = getMessage();

  return (
    <div className={styles.empty}>
      <img className={styles.emptyImage} src={noteImage} alt="note" />
      <p className={styles.emptyDescriptionBold}>{title}</p>
      <p>{description}</p>
    </div>
  );
};

export default EmptyTodoList;
