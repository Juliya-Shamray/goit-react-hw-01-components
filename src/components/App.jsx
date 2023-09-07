import user from '../assets/user.json';
import data from '../assets/data.json';
import friends from '../assets/friends';
import transactions from '../assets/transactions.json';

import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile {...user} />
      <Statistics title="Upload stats" data={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
