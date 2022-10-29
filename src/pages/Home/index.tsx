import { PlusCircle } from 'phosphor-react'
import {
  HomeContainer,
  FormContainer,
  ContainerLogo,
  TaskInput,
  NewTaskButton,
  Tasks,
} from './styles'
import Logo from '../../assets/logo.svg'
import { InfoTasks } from '../../components/InfoTasks'
import { ListTasks } from '../../components/ListTasks'

export const Home = () => {
  return (
    <HomeContainer>
      <ContainerLogo>
        <img src={Logo} alt="todo-logo" />
      </ContainerLogo>
      <FormContainer>
        <form>
          <TaskInput type="text" placeholder="Adicione uma tarefa" />
          <NewTaskButton>
            Criar
            <PlusCircle size={24} />
          </NewTaskButton>
        </form>
      </FormContainer>
      <Tasks>
        <InfoTasks />
        <ListTasks />
      </Tasks>
    </HomeContainer>
  )
}
