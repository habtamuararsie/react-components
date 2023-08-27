import React, {  useEffect, useState } from "react";

// https://www.googleapis.com/youtube/v3/search?key=AIzaSyB4xNW_TeLDTO9tKxmHQAZskoy9Na0sxR0&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=1
// "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBv_MveWxmNKF-fAAEDIy3qAIWtt0-YM1M&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=6"
function YoutubeVideos(){
  // constructor() {
  //   super();
  //   this.state = {
  //     youTubeVideos: [],
  //   };
  // }
const [videos, setVedio] = useState([]);
  useEffect(() => {
    fetch(
          // "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBdCONgvkp_9w19RDNXv5RwCNZBFGWtGvM&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=8"
      )
      .then((response) => response.json())
      .then((data) => {
        // const youTubeVideosData = data.items;
        const youTubeVideosData = data.items;
        console.log(youTubeVideosData);
        //setVedio({ youTubeVideosData });
        setVedio(youTubeVideosData)
      });
  }, []);

console.log(videos);
    return (
      <div className="allVideosWrapper">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper bold video-title-wrapper">
                Latest Videos
              </div>
            </div>
            {videos?.map((singleVideo, i) => {
              let vidId = singleVideo.id.videoId;
              let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
              let videoWrapper = (
                <div key={i} className="col-sm-12 col-md-6">
                  <div className="singleVideoWrapper">
                    <div className="videoThumbnail">
                      <a href={vidLink} target="_blank" rel="noopener noreferrer">
                        <img src={singleVideo.snippet.thumbnails.high.url} alt=" " />
                      </a>
                    </div>
                    <div className="videoInfoWrapper">
                      <div className="videoTitle">
                        <a href={vidLink} target="_blank"  rel="noopener noreferrer">
                          {singleVideo.snippet.title}
                        </a>
                      </div>
                      <div className="videoDesc">
                        {singleVideo.snippet.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
              return videoWrapper;
            })}
          </div>
        </div>
      </div>
    );
  }


export default YoutubeVideos;
