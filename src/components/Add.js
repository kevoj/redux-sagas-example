import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onAddTodo } from '../redux/actions/todoActions';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Input from '@mui/material/Input';
import LoadingButton from '@mui/lab/LoadingButton';

const Add = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.todo.loading.add);

  const [text, setText] = useState('');

  const _onAddTodo = () => {
    if (text) dispatch(onAddTodo(text));
  };

  return (
    <Card>
      <CardContent>
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='Task'
        />
        <LoadingButton
          variant='contained'
          onClick={_onAddTodo}
          size='small'
          loading={loading}
        >
          ADD
        </LoadingButton>
      </CardContent>
    </Card>
  );
};

export default Add;
