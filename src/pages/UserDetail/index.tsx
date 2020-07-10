import React, {useState, useEffect} from 'react';
import {ActivityIndicator} from 'react-native';

import {useRoute} from '@react-navigation/native';
import {useFetch} from '../../hooks/useFetch';

import {Container, UserInfo, UserID, UserName} from './styles';

interface IUser {
  id: number;
  name: string;
}

interface IRouteParams {
  id: number;
}

const UserDetail: React.FC = () => {
  // const [data, setData] = useState<IUser>({} as IUser);

  const {params} = useRoute();
  const {id} = params as IRouteParams;

  const {data} = useFetch<IUser>(`/users/${id}`);

  // useEffect(() => {
  //   fetch(`http://10.0.2.2:3333/users/${id}`).then((response) => {
  //     response.json().then((user) => setData(user));
  //   });
  // }, [id]);

  return (
    <Container>
      {data ? (
        <UserInfo>
          <UserID>ID: {data.id}</UserID>
          <UserName>Name: {data.name}</UserName>
        </UserInfo>
      ) : (
        <ActivityIndicator size="large" color="#ffff" />
      )}
    </Container>
  );
};

export default UserDetail;
