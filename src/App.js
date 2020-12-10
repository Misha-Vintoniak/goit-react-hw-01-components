import Profile from './Components/Profile/Profile';
import user from './Components/Profile/Profile.json';

import Statistic from './Components/Statistical/Statistical';
import statistic from './Components/Statistical/Statistical.json';

import Friends from './Components/Friends/Friends';
import friends from './Components/Friends/Friends.json';

import TransactionHistory from './Components/TransactionHistory/TransactionHistory';
import transaction from './Components/TransactionHistory/Transactions.json';

import './App.css';

function App() {
  return (
    <>
      <div>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
      <div>
        <Statistic title="Upload stats" stats={statistic} />
        <Statistic stats={statistic} />
      </div>
      <div>
        <Friends friends={friends} />
      </div>
      <div>
        <TransactionHistory items={transaction} />;
      </div>
    </>
  );
}

export default App;
