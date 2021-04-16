import React from 'react'

const VideoDetail = ({ video }) => {
  // conditional loading of video
  // if there's no selected video, then show nothing
  if(!video) {
    return <div>Loading...</div>
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p className="ui ">{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;