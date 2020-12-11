import Profile from './Profile/Profile';
import user from './Profile/Profile.json';

import Statistical from './Statistical/Statistical';
import statistical from './Statistical/Statistical.json';

import Friends from './Friends/Friends';
import friends from './Friends/Friends.json';

import TransactionHistory from './TransactionHistory/TransactionHistory';
import transaction from './TransactionHistory/Transactions.json';

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
        <Statistical title="Upload stats" stats={statistical} />
        <Statistical stats={statistical} />
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
