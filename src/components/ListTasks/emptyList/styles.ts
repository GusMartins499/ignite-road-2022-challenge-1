import styled from 'styled-components'

export const ContainerEmptyList = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 1.5rem;
  border-top: 1px solid ${({ theme }) => theme['gray-400']};
  border-radius: 8px;
  padding: 4rem;
  img {
    margin-bottom: 1rem;
  }
`

export const Title = styled.p`
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.4rem;
  color: ${({ theme }) => theme['gray-300']};
`

export const SubTitle = styled.p`
  font-size: 1rem;
  line-height: 1.4rem;
  color: ${({ theme }) => theme['gray-300']};
`
