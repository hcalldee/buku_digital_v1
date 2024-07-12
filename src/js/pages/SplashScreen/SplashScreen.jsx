import { useNavigate } from 'react-router-dom';
import { ButtonIcon } from '../../components/atoms/ButtonIcon';
import { useAppStore } from '../../store/store';
import { Fade } from '../../transitions/Fade/Fade';
import React, { useEffect, useRef, useState } from 'react';
import { toggleFullScreen } from '../../utils/helpers';
import { READING_MODE } from '../../utils/constants';

export const SplashScreen = () => {
	const navigate = useNavigate();

	const openingRef = useRef(null);

	const { showSplashScreen,setReadingMode } = useAppStore();

	const handleOpenBook = (readingMode) => {
		setReadingMode(readingMode);
		navigate('/book');
	};

	const [isPlay, setIsPlay] = useState(false);

	const handleEnded = () => {
		navigate('/usage-instruction');
	};

	const handleStart = () => {
		setIsPlay(true);
		toggleFullScreen(true);
		openingRef.current.play();
	};

	useEffect(() => {
		if (!showSplashScreen) navigate('/');
	}, [navigate, showSplashScreen]);

	return (
		<div className="h-screen w-full flex items-center justify-center">
		  <Fade className="flex flex-col items-center justify-center w-full h-full gap-8 rounded-lg md:flex-row">
			<audio ref={openingRef} src={require('../../../assets/opening.wav')} onEnded={handleEnded} />
	
			<div className="flex flex-col items-center justify-center w-full h-full">
			  <img className="z-0 w-full h-full object-cover rounded-lg shadow-xl" src={require('../../../assets/cover.jpg')} alt="" />
			  {!isPlay && (
				<ButtonIcon
				  className="absolute w-20"
				  icon={require('../../../assets/start.png')}
				  onClick={() => handleOpenBook(READING_MODE.READ_ALOUD)}
				  style={{ top: '90%', left: '50%', transform: 'translate(-50%, -50%)' }} // Center the button icon
				/>
			  )}
			</div>
		  </Fade>
		</div>
	  );
};
