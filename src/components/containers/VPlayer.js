import React, {useState, useEffect} from 'react'
import {ThemeProvider} from 'styled-components'
import Video from '../Video'
import Playlist from '../containers/Playlist'
import StyledVPlayer from '../styles/StyledVPlayer'


const themeDark = {
    bgcolor: "#353535",
    bgcolorItem: "#414141",
    bgcolorItemActive: "#405c65",
    bgcolorPlayed: "#5264de",
    border: "none",
    borderPlayed: "none",
    color: "#ffffff"
}
const themeLight = {
    bgcolor: "#ffffff",
    bgcolorItem: "#ffffff",
    bgcolorItemActive: "#80a7b1",
    bgcolorPlayed: "#7d9979",
    border: "1px solid #353535",
    borderPlayed: "none",
    color: "#353535"
}


const VPlayer = ({match, history, location}) => {
    const videos = JSON.parse(document.querySelector('[name="videos"]').value);

    const [state, setState] = useState({
        videos: videos.playlist,
        activeVideo: videos.playlist[0],
        playlistId: videos.playlistId,
        autoplay: false,
        nightMode: true
    })

    useEffect(() => {
        const videoId = match.params.activeVideo;
        if (videoId !== undefined) {
            const newActiveVideo = state.videos.findIndex(video => video.id === videoId)
            setState(prev => ({
                ...prev,
                activeVideo: prev.videos[newActiveVideo],
                autoplay:location.autoplay
            }))
        } else {
            history.push({
                pathname: `/${state.activeVideo.id}`,
                autoplay: false
            })
        }
    }, [history, location.autoplay, match.params.activeVideo, state.activeVideo.id, state.videos])

    const nightModeCallback = () => {}
    const endCallback = () => {}
    const progressCallback = () => {}


    return (
        <ThemeProvider theme={state.nightMode ? themeDark : themeLight}>
            {state.videos !== null ? (
                <StyledVPlayer>
                    <Video active={state.activeVideo} autoplay={state.autoplay} endCallback={endCallback} progressCallback={progressCallback}/>
                    <Playlist videos={state.videos} active={state.activeVideo} nightModeCallback={nightModeCallback} nightMode={state.nightMode}/>
                </StyledVPlayer>
            ) : null}
        </ThemeProvider> 

    )
}
export default VPlayer;