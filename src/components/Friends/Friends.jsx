import { FriendListItem, FriendImg, ListOfFriends, Name, Status } from "./Friends.styled"
import PropTypes from 'prop-types'; 

export const FriendsList = ({ friends }) => {
    return (
        <ListOfFriends>

            {friends.map(({avatar, name, isOnline, id}) => {
                return (<FriendListItem key={id}>
                            <Status type={isOnline.toString()}></Status>
                            <FriendImg src={avatar} alt={name} width="48" />
                            <Name>{ name}</Name>
                        </FriendListItem>)
            })}

        </ListOfFriends>
    )
}

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            isOnline: PropTypes.bool.isRequired,
        }),
    ),
}