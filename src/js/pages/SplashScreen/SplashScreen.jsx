import { useNavigate } from 'react-router-dom';
import { ButtonIcon } from '../../components/atoms/ButtonIcon';
import { useAppStore } from '../../store/store';
import { Fade } from '../../transitions/Fade/Fade';
import React, { useEffect, useRef, useState } from 'react';
import { toggleFullScreen } from '../../utils/helpers';

export const SplashScreen = () => {
	const navigate = useNavigate();

	const openingRef = useRef(null);

	const { showSplashScreen } = useAppStore();

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
		<Fade className="flex flex-col items-center justify-center w-full h-screen gap-8 rounded-lg md:flex-row">
			<audio ref={openingRef} src={require('../../../assets/opening.wav')} onEnded={handleEnded} />

			<div className="flex flex-col items-center justify-center w-9/12 gap-6 md:w-6/12 lg:w-5/12">
				<img className="z-0 w-full mx-auto rounded-lg shadow-xl" src={require('../../../assets/cover.jpg')} alt="" />
				{!isPlay && <ButtonIcon className="w-20" icon={require('../../../assets/start.png')} onClick={handleStart} />}
			</div>
		</Fade>
	);
};
