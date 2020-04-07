import React from 'react'
import PlaylistHeader from '../PlaylistHeader'
import PlaylistItems from '../containers/PlaylistItems';
import Nightmode from '../Nightmode'
import StyledPlaylist  from '../styles/StyledPlaylist'

const Playlist = ({videos, active, nightModeCallback, nightMode}) => {
    return (
        <StyledPlaylist>
            <Nightmode nightModeCallback={nightModeCallback} nightMode={nightMode} />
            <PlaylistHeader active={active} total={videos.length}/>
            <PlaylistItems active={active} videos={videos}/>
        </StyledPlaylist>
    )
}
export default Playlist;