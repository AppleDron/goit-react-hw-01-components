import { styled } from 'styled-components';

export const Container = styled.section`
  margin-bottom: 10px;
  background-color: #231e39;
  border-radius: 5px;
  box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
  color: #b3b8cd;
  padding: 30px 0;
  position: relative;
  flex-basis: 350px;
  /* width: 350px; */
  max-width: 100%;
  text-align: center;
`;

export const Describtion = styled.div`
  margin: 0 auto;
`;

export const Avatar = styled.img`
  border: 1px solid #03bfcb;
  border-radius: 50%;
  padding: 7px;
  width: 300px;
`;

export const DescriptionRows = styled.p``;

export const ListStats = styled.ul`
  display: flex;
  padding-top: 10px;
  justify-content: space-around;
  border-top: 1px solid #a69ad2;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
`;
