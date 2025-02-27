import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectVideo } from '../features/videos/videosSlice';

const VideoList = () => {
  const videos = useSelector((state) => state.videos.videos);
  const dispatch = useDispatch();

  if (!Array.isArray(videos) || videos.length === 0) {
    return <div className="text-gray-400">Aucune vidéo disponible.</div>;
  }

  return (
    <div>
      {videos.map((video) => (
        <div
          key={video.id}
          className="mb-4 cursor-pointer hover:bg-gray-700 p-2 rounded-lg"
          onClick={() => dispatch(selectVideo(video))}
        >
          <img
            src={video.miniature}
            alt={video.titre}
            className="w-full h-32 object-cover rounded-lg mb-2"
          />
          <div className="mt-2 text-center">
            <h5 className="text-white font-semibold ">{video.titre}</h5>
            <p className="text-gray-400 text-sm ">{video.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoList;