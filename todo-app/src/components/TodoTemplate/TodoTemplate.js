import React from 'react';
import * as S from './style';

const TodoTemplate = ({ children }) => {
  return (
    <S.TodoTemplate>
      <div className="app-title">일정 관리</div>
      <div className="content">{children}</div>
    </S.TodoTemplate>
  );
};

export default TodoTemplate;
