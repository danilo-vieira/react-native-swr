import React, {useState, useEffect, useCallback} from 'react';

import {useNavigation} from '@react-navigation/native';
import {mutate as mutateGlobal} from 'swr';

import {ActivityIndicator} from 'react-native';

import {useFetch} from '../../hooks/useFetch';

import {
  Container,
  List,
  UserButton,
  UserButtonText,
  ChangeNameButton,
  ChangeNameButtonText,
} from './styles';

import api from '../../services/api';

export interface IUser {
  id: number;
  name: string;
}

const UserList: React.FC = () => {
  // const [data, setData] = useState<IUser[]>([]);
  const {data, mutate} = useFetch<IUser[]>('/users');

  const {navigate} = useNavigation();

  // useEffect(() => {
  //   fetch('http://10.0.2.2:3333/users').then((response) => {
  //     response.json().then((users) => {
  //       setData(users);
  //     });
  //   });
  // }, []);

  const handleNamePressed = useCallback(
    (id: number) => {
      navigate('UserDetail', {id});
    },
    [navigate],
  );

  const handleNameChange = useCallback(
    (id: number) => {
      api.put(`/users/${id}`, {name: 'Mary'});

      const updatedUsers = data?.map((user) => {
        if (user.id === id) {
          return {
            ...user,
            name: 'Mary',
          };
        }

        return user;
      });

      mutate(updatedUsers, false);
      mutateGlobal(`/users/${id}`, {id, name: 'Mary'});
    },
    [data, mutate],
  );

  return (
    <Container>
      {data ? (
        <List
          data={data}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({item: user}) => (
            <>
              <UserButton onPress={() => handleNamePressed(user.id)}>
                <UserButtonText>{user.name}</UserButtonText>
              </UserButton>
              <ChangeNameButton onPress={() => handleNameChange(user.id)}>
                <ChangeNameButtonText>Alterar nome</ChangeNameButtonText>
              </ChangeNameButton>
            </>
          )}
        />
      ) : (
        <ActivityIndicator size="large" color="#ffff" />
      )}
    </Container>
  );
};

export default UserList;
