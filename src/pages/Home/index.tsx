import React from 'react'
import { PlusCircle } from 'phosphor-react'
import {
  HomeContainer,
  FormContainer,
  ContainerLogo,
  TaskInput,
  NewTaskButton,
} from './styles'
import Logo from '../../assets/logo.svg'

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
    </HomeContainer>
  )
}
