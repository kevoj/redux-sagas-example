import Options from './Options';
import Add from './Add';
import List from './List';

const Home = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Options />
      <Add />
      <List />
    </div>
  );
};

export default Home;
