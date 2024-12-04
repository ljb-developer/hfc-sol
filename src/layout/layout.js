import React, { useEffect, useState } from "react";
import "../styles/index.scss";
import Header from "./headers/header";
import Footer from "./footers/footer";
import ToggleLightDark from "../components/toggle-light-dark";
import { tg_theme_toggler } from "../utils/utils";
import Preloader from "../components/preloader";
// Import Images and Videos for pre-loading
import collection_data from "../data/collection-data";
import artdice_images from "../data/artdice-data";
import videos_data from "../data/videos-data";
import videos_data2 from "../data/videos-data2";
import music_data from "../data/music-data";


const Layout = ({ children, blog_page = false }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!loading) {
      tg_theme_toggler();
    }
  }, [loading]);

const preloadedImages = [
  "/assets/img/logo/hfc_logo.jpeg",
  "/assets/img/artwork/1.jpg",
  "/assets/img/artwork/2.png",
  "/assets/img/artwork/4.jpg",
  "/assets/img/artwork/5.jpg",
  "/assets/img/artwork/9.jpg",
  "/assets/img/artwork/11.jpg",
  "/assets/img/artwork/12.jpg",
  "/assets/img/artwork/13.jpg",
  "/assets/img/logo/hfc_logo.jpeg",
  "/assets/img/artwork/16.jpg",
  "/assets/img/artwork/18.jpg",
  "/assets/img/artwork/19.jpg",
  "/assets/img/artwork/20.jpg",
  "/assets/img/artwork/21.jpg",
  "/assets/img/artwork/22.jpg",
  "/assets/img/artwork/24.jpg",
  "/assets/img/artwork/25.jpg",
  "/assets/img/artwork/27.jpg",
  "/assets/img/artwork/28.jpg",
  "/assets/img/artwork/29.jpg",
  "/assets/img/artwork/30.jpg",
  "/assets/img/artwork/31.jpg",
  "/assets/img/artwork/32.jpg",
  "/assets/img/artwork/33.jpg",
  "/assets/img/artwork/34.jpg",
  "/assets/img/artwork/35.jpg",
  "/assets/img/artwork/36.jpg",
  "/assets/img/artwork/37.jpg",
  "/assets/img/artwork/38.jpg",
  "/assets/img/artwork/39.jpg",
  "/assets/img/artwork/41.jpg",
  "/assets/img/artwork/42.jpg",
  "/assets/img/artwork/43.jpg",
  "/assets/img/artwork/44.jpg",
  "/assets/img/artwork/45.jpg",
  "/assets/img/artwork/46.jpg",
  "/assets/img/artwork/47.jpg",
  "/assets/img/artwork/48.jpg",
  "/assets/img/artwork/49.jpg",
  "/assets/img/artwork/50.jpg",
];

  const imageFiles = [
    ...preloadedImages,
    ...artdice_images.map((item) => item.img),
    ...music_data.map((item) => item.cover),
    ...videos_data2.map((item) => item.cover),
  ];

  const MainContent = () => (
    <div className="main-content" style={{ visibility: "hidden" }}>
      {imageFiles.map((item, index) => (
        <img key={index} src={item} alt={`Image ${index}`} />
      ))}
    </div>
  );

  useEffect(() => {
    const imageSources = [
      ...collection_data,
      ...artdice_images.map((item) => item.img),
      ...music_data.map((item) => item.cover),
    ];

    const preloadAssets = () => {
      let loadedImages = 0;
      const totalImages = imageSources.length;

      const updateProgress = () => {
        const totalAssets = totalImages;
        const totalLoaded = loadedImages;
        const percentage = (totalLoaded / totalAssets) * 100;
        setProgress(percentage);
      };

      const onImageLoad = () => {
        loadedImages += 1;
        updateProgress();
        if (loadedImages === totalImages) {
          setTimeout(() => setLoading(false), 2000); // Delay of 2 seconds
        }
      };

      imageSources.forEach((src) => {
        const img = new Image();
        img.src = src;
        img.onload = onImageLoad;
        img.onerror = onImageLoad; // Handle errors as well
      });
    };

    preloadAssets();
  }, []);

  if (loading) {
    return (
      <>
        <Preloader progress={progress} />
        <MainContent />
      </>
    );
  }

  return (
    <React.Fragment>
      {loading ? (
        <></>
      ) : (
        <>
          <Header blog_page={blog_page} />
          <main id={blog_page ? "" : "home"} className="fix">
            {children}
          </main>
          <Footer />
          <ToggleLightDark />
        </>
      )}
    </React.Fragment>
  );
};

export default Layout;
