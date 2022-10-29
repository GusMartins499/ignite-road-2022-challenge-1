import styled from 'styled-components'

export const HomeContainer = styled.main`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  form {
    margin-top: -26px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
`

export const TaskInput = styled.input`
  width: 40rem;
  height: 3rem;
  border-radius: 8px;
  border: 0;
  background-color: ${({ theme }) => theme['gray-500']};
  color: ${({ theme }) => theme['gray-300']};
  &:focus {
    outline: 1px solid ${({ theme }) => theme['purple-300']};
  }
  &::placeholder {
    color: ${({ theme }) => theme['gray-300']};
    padding: 1rem;
  }
`

export const ContainerLogo = styled.div`
  width: 100%;
  padding: 4.6rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme['gray-700']};
`

export const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme['gray-600']};
`

export const NewTaskButton = styled.button`
  width: 6rem;
  height: 3rem;
  border: 0;
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme['blue-300']};
  color: ${({ theme }) => theme['gray-100']};
  transition: color 0.3s, background-color 0.3s;
  gap: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme['blue-100']};
    color: ${({ theme }) => theme['gray-200']};
  }
`
