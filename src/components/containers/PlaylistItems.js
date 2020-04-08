import React from 'react'
import PlaylistItem from '../PlaylistItem';
import StyledPlaylistitems from '../styles/StyledPlaylistitems';
import withLink from '../hoc/withLink'


const PlaylistItemWithLink = withLink(PlaylistItem);


const PlaylistItems = ({videos, active}) => {
    return (
        <StyledPlaylistitems>
            {videos.map(video => {
                return (
                    <PlaylistItemWithLink key={video.id} video={video} active={video.id === active.id ? true : false} played={video.played}/>    
                )
            })}
        </StyledPlaylistitems>
    )
}
export default PlaylistItems;