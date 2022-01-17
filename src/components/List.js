import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import {
  onGetTodo,
  onUpdateTodo,
  onDeleteTodo,
} from '../redux/actions/todoActions';

const List = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todo.data.list);
  const loading = useSelector((state) => state.todo.loading);

  useEffect(() => {
    dispatch(onGetTodo());
  }, []);

  const _onUpdateTodo = (id, value) => {
    dispatch(onUpdateTodo(id, value));
  };

  const _onDeleteTodo = (id) => {
    dispatch(onDeleteTodo(id));
  };

  return (
    <>
      {(loading.list || loading.update || loading.delete) && (
        <div
          style={{
            position: 'fixed',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            zIndex: 9999,
          }}
        >
          <CircularProgress style={{ margin: '5px 0' }} />
        </div>
      )}
      {list.map((x, i) => (
        <Card key={i} style={{ margin: '2px 0' }}>
          <CardContent>
            <Input
              value={x.title}
              placeholder='Title'
              onChange={(e) => _onUpdateTodo(x.id, e.target.value)}
            />
            <Button
              onClick={(e) => _onDeleteTodo(x.id)}
              variant='contained'
              color='error'
              size='small'
            >
              x
            </Button>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default List;
