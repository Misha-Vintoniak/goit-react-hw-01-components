import Profile from './components/profile/profile';
import user from './components/profile/profile.json';

import Statistic from './components/statistical/statistical';
import statistic from './components/statistical/statistical.json';

import FriendList from './components/friends/friends';
import friends from './components/friends/friends.json';

import TransactionHistory from './components/transaction/transaction';
import transaction from './components/transaction/transactions.json';

import './App.css';

function App() {
  return (
    <>
      <div className="task">
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
      <div className="task">
        <Statistic title="Upload stats" stats={statistic} />
        <Statistic stats={statistic} />
      </div>
      <div className="task">
        <FriendList friends={friends} />
      </div>
      <div className="task">
        <TransactionHistory items={transaction} />;
      </div>
    </>
  );
}

export default App;
