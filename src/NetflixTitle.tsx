import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logoImage from "../src/images/logo-2.png"; // Update with the path to your logo
import "./NetflixTitle.css";
import netflixSound from "./netflix-sound.mp3";
import { getProfileBanner } from "./queries/getProfileBanner";
import { ProfileBanner as ProfileBannerType } from './types';

const NetflixTitle = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [bannerData, setBannerData] = useState<ProfileBannerType | null>(null);
  const navigate = useNavigate();

  const handlePlaySound = () => {
    const audio = new Audio(netflixSound);
    audio.play().catch((error) => console.error("Audio play error:", error));
    setIsClicked(true);
  };

  useEffect(() => {
    if (isClicked) {
      const timer = setTimeout(() => {
        navigate("/browse");
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isClicked, navigate]);

    useEffect(() => {
      async function fetchData() {
        const data = await getProfileBanner();
        setBannerData(data);
      }
      fetchData();
    }, []);

  return (
    <div className="netflix-container" onClick={handlePlaySound}>
      <img 
        src={logoImage} 
        alt="Custom Logo" 
        className={`netflix-logo ${isClicked ? 'animate' : ''}`} 
      />

      {!isClicked && (
        <img
          src={bannerData?.clickHelper?.url}
          alt="Click Helper"
          className="click-helper"
        />
      )}
    </div>
  );
};

export default NetflixTitle;
