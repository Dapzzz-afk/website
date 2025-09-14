// api/videos.js
export default function handler(req, res) {
  // Simulasi data dari database
  const videos = [
    { title: "Video 1", url: "https://cdn.example.com/video1.mp4" },
    { title: "Video 2", url: "https://cdn.example.com/video2.mp4" },
    { title: "Video 3", url: "https://cdn.example.com/video3.mp4" }
  ];

  res.status(200).json(videos);
}
