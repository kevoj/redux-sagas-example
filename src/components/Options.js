import { useDispatch } from 'react-redux';
import { onResetTodo } from '../redux/actions/todoActions';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const Options = () => {
  const dispatch = useDispatch();

  const _onReset = () => {
    dispatch(onResetTodo('*'));
  };

  return (
    <div style={{ margin: '10px 0' }}>
      <ButtonGroup>
        {/* <Button variant='outlined' onClick={_onReset} size='small'>
          From API
        </Button>
        <Button variant='outlined' onClick={_onReset} size='small'>
          From Cache
        </Button> */}
        <Button variant='outlined' onClick={_onReset} size='small'>
          Reset
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Options;
