import { ContainerEmptyList, SubTitle, Title } from './styles'
import EmptyListImg from '../../../assets/empty.svg'

export const EmptyList = () => {
  return (
    <ContainerEmptyList>
      <img src={EmptyListImg} alt="clipboard" />
      <Title>Você ainda não tem tarefas cadastradas</Title>
      <SubTitle>Crie tarefas e organize seus itens a fazer</SubTitle>
    </ContainerEmptyList>
  )
}
