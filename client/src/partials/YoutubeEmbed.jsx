import React from "react";

const YoutubeEmbed = ({ embedId }) => {
  return (
    <div>
      <iframe
        className="w-full "
        // width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube video"
      />
    </div>
  );
};

export default YoutubeEmbed;
