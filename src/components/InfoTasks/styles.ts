import styled from 'styled-components'

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const BaseInfoTasks = styled.span`
  font-size: 0.875rem;
  font-weight: 700;
`

export const TodoTasks = styled(BaseInfoTasks)`
  color: ${({ theme }) => theme['blue-100']};
`

export const DoneTasks = styled(BaseInfoTasks)`
  color: ${({ theme }) => theme['purple-100']};
`

export const TotalTasks = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme['gray-200']};
  margin-left: 8px;
  padding: 2px 8px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme['gray-400']};
`
