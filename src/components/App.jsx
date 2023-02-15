import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import Profile from '../Profile/Profile';
import FriendList from '../FriendList/FriendList';
import Statistics from '../Statistics/Statistics';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import { Body } from '../components/App.styled';

export default function App() {
  return (
    <Body>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Body>
  );
}
