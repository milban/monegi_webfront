import React from "react"
import AddPlaylistPresenter from "./AddPlaylistPresenter"

export default class AddPlaylistContainer extends React.Component {
  state = {
    playlistName: "",
    authorName: "",
    youtubeUrl: "",
    youtubeUrlList: [],
    loading: true,
    error: null
  }

  updatePlaylistName = event => {
    const {
      target: { value: playlistName }
    } = event
    this.setState({ playlistName })
  }

  updateAuthorName = event => {
    const {
      target: { value: authorName }
    } = event
    this.setState({ authorName })
  }

  updateYoutubeUrl = event => {
    const {
      target: { value: youtubeUrl }
    } = event
    this.setState({ youtubeUrl })
  }

  youtubeUrlSubmitHandler = event => {
    event.preventDefault()
    const { youtubeUrl } = this.state
    if (youtubeUrl !== "") {
      let { youtubeUrlList } = this.state
      youtubeUrlList.push(youtubeUrl)
      this.setState({ youtubeUrlList, youtubeUrl: "" })
      console.log(this.state.youtubeUrlList)
    }
  }

  render() {
    return (
      <AddPlaylistPresenter
        updatePlaylistName={this.updatePlaylistName}
        updateAuthorName={this.updateAuthorName}
        updateYoutubeUrl={this.updateYoutubeUrl}
        youtubeUrlSubmitHandler={this.youtubeUrlSubmitHandler}
        {...this.state}
      ></AddPlaylistPresenter>
    )
  }
}
