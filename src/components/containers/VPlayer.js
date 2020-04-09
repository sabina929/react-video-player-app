import React, {useState, useEffect} from 'react'
import {ThemeProvider} from 'styled-components'
import Video from '../Video'
import Playlist from '../containers/Playlist'
import StyledVPlayer from '../styles/StyledVPlayer'


const themeDark = {
    bgcolor: "hsl(276, 24%, 2%)",
    bgcolorItem: "hsl(276, 24%, 12%)",
    bgcolorItemActive: "hsl(276, 50%, 20%)",
    bgcolorPlayed: "hsl(276, 56%, 50%)",
    border: "none",
    borderPlayed: "none",
    color: "hsl(276, 24%, 96%)"
}
const themeLight = {
    bgcolor: "hsl(276, 24%, 96%)",
    bgcolorItem: "hsl(276, 24%, 96%)",
    bgcolorItemActive: "hsl(276, 50%, 60%)",
    bgcolorPlayed: "hsl(276, 24%, 36%)",
    border: "1px solid hsl(276, 24%, 2%)",
    borderPlayed: "none",
    color: "hsl(276, 24%, 2%)"
}


const VPlayer = ({match, history, location}) => {
    const videos = JSON.parse(document.querySelector('[name="videos"]').value);
    const savedState = JSON.parse(localStorage.getItem(`${videos.playlistId}`))

    const [state, setState] = useState({
        videos: savedState ? savedState.videos : videos.playlist,
        activeVideo: savedState ? savedState.activeVideo : videos.playlist[0],
        playlistId: savedState ? savedState.playlistId : videos.playlistId,
        autoplay: false,
        nightMode: savedState ? savedState.nightMode : true
    })

    useEffect(() => {
        localStorage.setItem(`${state.playlistId}`, JSON.stringify({...state}))
    }, [state])

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

    const nightModeCallback = () => {
        setState(prev => ({
            ...prev,
            nightMode: !prev.nightMode
        }))
    }
    const endCallback = () => {
        const videoId = match.params.activeVideo;
        const currentVideoIndex = state.videos.findIndex(video => video.id === videoId)

        const nextVideo = currentVideoIndex === state.videos.length - 1 ? 0 : currentVideoIndex + 1;

        history.push({
            pathname: `/${state.videos[nextVideo].id}`,
            autoplay: true
        })
    }


    const progressCallback = (e) => {
        if (e.playedSeconds > 10 && e.playedSeconds < 11) {

            // FIRST WAY
            // setState({
            //     ...state,
            //     videos: state.videos.map(video => {
            //         return video.id === state.activeVideo.id ? {...video, played: true} : video;
            //     })
            // })


            // SECOND WAY
            const videos = [...state.videos];
            const playedVideo = videos.find(video => {
               return video.id === state.activeVideo.id
            })

            playedVideo.played = true;
            setState(prev => ({
                ...prev,
                videos
            }))
        }
    }


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