"use client";

import { Eye, X } from "@phosphor-icons/react";
import { useState } from "react";
import YouTube from "react-youtube";

export default function VideoPlayer({ videoId }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const options = {
    width: "350",
    height: "250",
  };

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button
          className="text-color-primary float-right px-3 mb-1 bg-color-secondary rounded-full p-3 hover:bg-color-accent hover:text-color-dark transition-all"
          onClick={handleVideoPlayer}
        >
          <X size={21} />
        </button>
        <YouTube
          videoId={videoId}
          onReady={(event) => {
            event.target.pauseVideo();
          }}
          opts={options}
        />
      </div>
    );
  };

  const ButtonOpenTrailer = () => {
    return (
      <button
        className="fixed bottom-5 right-5 text-color-primary float-right px-3 bg-color-secondary rounded-full p-3 text-sm hover:bg-color-accent hover:text-color-dark transition-all"
        onClick={handleVideoPlayer}
      >
        Tonton Trailer
      </button>
    );
  };

  return isOpen ? <Player /> : <ButtonOpenTrailer />;
}
