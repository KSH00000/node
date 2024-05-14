import { useState, useRef, useEffect } from 'react';

function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  },[isPlaying]);

  return <video ref={ref} src={src} loop playsInline />;
}

export default function Comp() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [text,setText] = useState("");
  return (
    <>
      <input value={text} onChange={e => setText(e.target.value)}/>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? '일시 정지' : '재생'}
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
        //src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      />
    </>
  );
}
