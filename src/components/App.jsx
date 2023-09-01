import { Profile } from "./Profile/Profile";
import { Statistic } from "./Statistic/Statistic";
import user from '../data/user.json'
import data from '../data/data.json'
import friends from '../data/friends.json'
import transactions from '../data/transactions.json'
import { FriendsList } from "./Friends/Friends";
import { Wrapper } from "./Wrappers/WrapperApp.styled";
import { Sidebar } from "./Wrappers/Sidebars.styled";
import { TransactionHistory } from "./Transactions/Transaction";
import { Content } from "./Wrappers/Content.styled";


export const App = () => {
  const {username, tag, location, avatar, stats: {followers, views, likes}} = user
  return (
    <Wrapper>
      <Sidebar>
        <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        followers={followers}
        views={views}
          likes={likes} />
        <FriendsList friends={friends } />
      </Sidebar>
      
      <Content>
        <Statistic title="Upload stats" stats={data} />
        <TransactionHistory items={transactions } />
      </Content>
    </Wrapper>
  );
};
