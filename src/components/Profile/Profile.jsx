import { Container, Describtion, Avatar, DescriptionRows, ListStats, ListItem } from "./Profile.styled"
import PropTypes from 'prop-types'; 

export const Profile = (props) => {
  const { username, tag, location, avatar, followers, views, likes } = props
    return (<Container>
              <Describtion>
                <Avatar
                  src={avatar}
                  alt={username}
                />
                    <DescriptionRows >{username}</DescriptionRows>
                    <DescriptionRows >@{tag}</DescriptionRows>
                    <DescriptionRows >{location}</DescriptionRows>
              </Describtion>

              <ListStats>
                <ListItem>
                  <span className="label">Followers </span>
                  <span className="quantity">{followers}</span>
                </ListItem>
                <ListItem>
                  <span className="label">Views </span>
                  <span className="quantity">{views}</span>
                </ListItem>
                <ListItem>
                  <span className="label">Likes </span>
                  <span className="quantity">{likes}</span>
                </ListItem>
              </ListStats>
            </Container>)
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired
}