import React, { useState, useEffect } from 'react'
import music3 from './music/보도블록 위에 내리는 비.MP3';
import music4 from './music/산 오솔길.MP3';
import music5 from './music/아스팔트.mp3';

const useMultiAudio = urls => {

  urls={music : [
    music3,
    music4,
    music5,
  ]}

  const [sources] = useState(
    urls.music.map(url => {
      return {
        url,
        audio: new Audio(url),
      }
    }),
  )

  const [players, setPlayers] = useState(
    urls.music.map(url => {
      return {
        url,
        playing: false,
      }
    }),
  )

  const toggle = targetIndex => () => {
    const newPlayers = [...players]
    const currentIndex = players.findIndex(p => p.playing === true)
    if (currentIndex !== -1 && currentIndex !== targetIndex) {
      newPlayers[currentIndex].playing = false
      newPlayers[targetIndex].playing = true
    } else if (currentIndex !== -1) {
      newPlayers[targetIndex].playing = false
    } else {
      newPlayers[targetIndex].playing = true
    }
    setPlayers(newPlayers)
  }

  useEffect(() => {
    sources.forEach((source, i) => {
      players[i].playing ? source.audio.play() : source.audio.pause()
      source.audio.volume = 0.2;
    })
  }, [sources, players])

  useEffect(() => {
    sources.forEach((source, i) => {
      source.audio.addEventListener('ended', () => {
        const newPlayers = [...players]
        newPlayers[i].playing = false
        setPlayers(newPlayers)
      })
    })
    return () => {
      sources.forEach((source, i) => {
        source.audio.removeEventListener('ended', () => {
          const newPlayers = [...players]
          newPlayers[i].playing = false
          setPlayers(newPlayers)
        })
      })
    }
  }, [])

  return [players, toggle]
}

const Music = ({ urls }) => {
  const [players, toggle] = useMultiAudio(urls)

  return (
    <div>
      {players.map((player, i) => (
        <Player key={i} player={player} toggle={toggle(i)} />
      ))}
    </div>
  )
}

const Player = ({ player, toggle }) => (
  <div>
    <p>Stream URL: {player.url}</p>
    <button onClick={toggle}>{player.playing ? 'Pause' : 'Play'}</button>
  </div>
)


export default Music