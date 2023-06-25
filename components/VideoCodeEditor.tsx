'use client';
import { useRef, useEffect } from 'react';
import Link from 'next/link';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

export default function VideoCodeEditor() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videojs(videoRef.current, {
        sources: [
          {
            src: 'https://stream.mux.com/GJjLF93MGEmq4VfidIdZ4oMMAJRhEjSQ.m3u8',
            type: 'application/x-mpegURL',
          },
        ],
      });
    }
  });

  return (
    <div className="flex justify-center flex-col items-center p-4">
      <h1>Watch and Play tutorial videos</h1>
      <video
        controls
        ref={videoRef}
        className="video-js"
      />
    </div>
  );
}
