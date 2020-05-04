import React from 'react';
import Background from 'app/components/Background';

const Login: React.FC = () => {
  console.log('hello!')
  return (
    <Background source={require('../../../assets/login.png')}></Background>
  );
};

export default Login;
