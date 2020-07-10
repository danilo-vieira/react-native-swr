import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background: red;
`;

export const UserInfo = styled.View`
  background: #ffff;
  justify-content: center;

  padding: 20px;

  border-radius: 10px;
`;

export const UserID = styled.Text`
  font-weight: bold;
  font-size: 32px;
`;

export const UserName = styled.Text`
  font-weight: bold;
  font-size: 32px;
`;
