import React from "react"
import styled from "styled-components"
import ReactPlayer from "react-player"

const Container = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Description = styled.div`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;
`

const PlayListForm = styled.form`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const YoutubeUrlForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Input = styled.input`
  border: none;
  padding: 1rem;
  font-size: 1.5rem;
  background-color: #1e272e;
  color: white;
  text-align: center;
  min-width: 375px;
  width: ${props => props.width || "50%"};
  &:focus {
    outline: none;
    &::placeholder {
      color: transparent;
    }
  }
`

const Button = styled.button`
  background-color: #05c46b;
  min-width: 20%;
  color: white;
  text-align: center;
  font-size: 1.5rem;
  border: none;
  border-radius: 20px;
`

export default ({
  playListSubmitHandler,
  playlistName,
  updatePlaylistName,
  authorName,
  updateAuthorName,
  youtubeUrlSubmitHandler,
  youtubeUrl,
  youtubeUrlList,
  updateYoutubeUrl
}) => (
  <Container>
    <Description>Make Your Labor-Music Play List</Description>
    <PlayListForm onSubmit={playListSubmitHandler}>
      <Input
        placeholder="Play List Name"
        value={playlistName}
        onChange={updatePlaylistName}
        required
      ></Input>
      <Input placeholder="Author" value={authorName} onChange={updateAuthorName} required></Input>
      <YoutubeUrlForm onSubmit={youtubeUrlSubmitHandler}>
        <Input
          placeholder="Youtube URL"
          value={youtubeUrl}
          onChange={updateYoutubeUrl}
          type="url"
          width="70%"
        ></Input>
        <Button type="submit">Add URL</Button>
      </YoutubeUrlForm>
    </PlayListForm>
    {youtubeUrlList.map(youtubeUrl => {
      return <ReactPlayer url={youtubeUrl} controls></ReactPlayer>
    })}
  </Container>
)
