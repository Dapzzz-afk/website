// api/videos.js
export default function handler(req, res) {
  // Simulasi data dari database
  const videos = [
    { title: "Video 1", url: "https://videy.co/v/?id=699gmyTh1" },
    { title: "Video 2", url: "https://videy.co/v/?id=HG4KC8CF1" },
    { title: "Video 3", url: "https://videy.co/v/?id=DEDydhXC1" }
  ];

  res.status(200).json(videos);
}
