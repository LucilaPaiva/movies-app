import React from "react";
import YouTube from "react-youtube";

type TrailerProps = {
  movieTitle: string;
};

const Trailer: React.FC<TrailerProps> = ({ movieTitle }) => {
  const [videoId, setVideoId] = React.useState<string>("");

  React.useEffect(() => {
    const fetchVideoId = async () => {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${encodeURIComponent(
          movieTitle + " trailer"
        )}&key=AIzaSyCVL4S90qkcZhgBI8TQ6Iz5SVJ2u5Urjb8`
      );
      const data = await response.json();
      const id = data?.items?.[0]?.id?.videoId;
      if (id) {
        setVideoId(id);
      }
    };
    fetchVideoId();
  }, [movieTitle]);

  return (
    <div className="trailer-container">
      {videoId ? (
        <YouTube videoId={videoId} className="youtube-video" />
      ) : (
        <p>Trailer not available</p>
      )}
    </div>
  );
};

export default Trailer;



