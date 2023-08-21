import video from '../../video.MP4';

export const Video = () => {
  return (
    <div>
      <video width="200" height="200" controls>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};
