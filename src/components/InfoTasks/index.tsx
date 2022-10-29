import { DoneTasks, InfoContainer, TodoTasks, TotalTasks } from './styles'

export const InfoTasks = () => {
  return (
    <InfoContainer>
      <TodoTasks>
        Tarefas criadas
        <TotalTasks>0</TotalTasks>
      </TodoTasks>
      <DoneTasks>
        Concluídas
        <TotalTasks>0</TotalTasks>
      </DoneTasks>
    </InfoContainer>
  )
}
