import MonacoEditor from '@/components/MonacoEditor';
import VideoCodeEditor from '../components/VideoCodeEditor';
//import Ide from '@/components/AceEditor';

const HomePage = () => {
  //const videoUrl = 'https://example.com/video.mp4'; // Replace with your actual video URL

  return (
    <div className="flex justify-center flex-col p-4 ">
      <h1 className="text-center">Welcome to My Coding Website</h1>
      {/*<VideoCodeEditor videoUrl={videoUrl} />*/}
      <VideoCodeEditor />
      {/* Other content */}
      {/* Other content */}
      {/*<Ide />*/}
      <MonacoEditor />
    </div>
  );
};

export default HomePage;
