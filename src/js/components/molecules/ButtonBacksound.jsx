import { ButtonIcon } from '../atoms/ButtonIcon';
import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

import backsoundURL from '../../../assets/opening2.mp3';
import { Tooltip } from 'react-tooltip';

export const ButtonBacksound = () => {
	const backsoundRef = useRef(null);
	const location = useLocation();

	const IS_READING = location.pathname === '/book';

	const [isBacksoundReady, setIsBacksoundReady] = useState(false);
	const [playing, setPlaying] = useState(false);

	const IS_MUSIC_ON = playing && isBacksoundReady;

	const toggleBacksound = () => {
		if (backsoundRef.current?.paused) {
			backsoundRef.current?.play();
			setPlaying(true);
		} else {
			backsoundRef.current.pause();
			setPlaying(false);
		}
	};

	const onBacksoundReady = () => {
		backsoundRef.current.volume = 0.25;
		setIsBacksoundReady(true);
	};

	useEffect(() => {
		if (IS_READING) backsoundRef.current.volume = 0.03;
		else backsoundRef.current.volume = 0.25;
	}, [backsoundRef, location, IS_READING]);

	return (
		<>
			<div id="buttonBacksound" className="flex items-center justify-center">
				<audio
					ref={backsoundRef}
					src={backsoundURL}
					autoPlay
					loop
					onLoadedData={onBacksoundReady}
					onPlay={() => setPlaying(true)}
				/>

				<div className="text-sm text-center">
					<ButtonIcon
						icon={IS_MUSIC_ON ? require('../../../assets/tesmusikon.png') : require('../../../assets/tesmusikoff.png') }
						className={IS_MUSIC_ON ? clsx('w-8 md:w-9 lg:w-10') : clsx('w-8 md:w-9 lg:w-6')}
						onClick={toggleBacksound}
					/>
					<div>{IS_MUSIC_ON ? 'ON' : 'OFF'}</div>
				</div>
			</div>
			<Tooltip anchorSelect="#buttonBacksound" place="top">
				Musik
			</Tooltip>
		</>
	);
};
