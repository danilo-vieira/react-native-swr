import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

import {IUser} from '.';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background: red;
`;

export const List = styled(FlatList as new () => FlatList<IUser>)`
  padding: 32px 24px 16px;
`;

export const UserButton = styled(RectButton)`
  padding: 16px 24px;
  background: #ffff;

  margin-top: 10px;

  align-items: center;
  justify-content: center;

  border-radius: 10px;
`;

export const UserButtonText = styled.Text`
  font-weight: bold;
  font-size: 32px;
`;

export const ChangeNameButton = styled(RectButton)`
  padding: 7px 20px;
  margin-top: 8px;

  border-radius: 8px;

  background: #66cc33;

  align-items: center;
  justify-content: center;
`;

export const ChangeNameButtonText = styled.Text`
  font-size: 20px;
  color: #ffff;
`;
