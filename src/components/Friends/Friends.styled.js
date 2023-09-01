import { styled } from 'styled-components';

export const ListOfFriends = styled.ul`
  /* margin: 0 auto; */
  margin-bottom: 10px;
  background-color: #231e39;
  border-radius: 5px;
  box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
  color: #b3b8cd;
  padding: 30px 0;
  /* width: 350px; */
  max-width: 100%;
`;

export const FriendListItem = styled.li`
  display: flex;
  align-items: center;
  column-gap: 10px;
  padding: 15px;
  border-bottom: 1px solid #a69ad2;
`;

const status = ({ type }) => {
  switch (type) {
    case 'true':
      return 'green';
    case 'false':
      return 'red';
    default:
      return '#fff';
  }
};

export const Status = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: ${status};
`;

export const FriendImg = styled.img`
  border-radius: 50%;
  border: 1px solid #03bfcb;
`;

export const Name = styled.p``;
