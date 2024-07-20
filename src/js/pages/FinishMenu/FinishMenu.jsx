import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Fade } from '../../transitions/Fade/Fade';
import { Button } from '../../components/atoms/Button';
import { ButtonIcon } from '../../components/atoms/ButtonIcon';

export const FinishMenu = () => {
	const navigate = useNavigate();

	return (
		<div className="h-screen w-full flex items-center justify-center">
		  <Fade className="flex flex-col items-center justify-center w-full h-full gap-8 rounded-lg md:flex-row">
			{/* <audio ref={openingRef} src={require('../../../assets/opening.wav')} onEnded={handleEnded} /> */}
	
			<div className="flex flex-col items-center justify-center w-full h-full">
			  <img className="z-0 w-full h-full object-cover rounded-lg shadow-xl" src={require('../../../assets/cover-end.jpg')} alt="" />

			  <Button label="Halaman Utama"
				className="absolute w-35"
				// icon={require('../../../assets/start.png')}
					onClick={() => navigate('/')}
				style={{ top: '85%', left: '42%', transform: 'translate(-50%, -50%)' }} // Center the button icon
				/>

			  <Button label="Tentang Kreator"
				className="absolute w-35"
				// icon={require('../../../assets/start.png')}
					onClick={() => navigate('/author')}
				style={{ top: '85%', left: '58%', transform: 'translate(-50%, -50%)' }} // Center the button icon
				/>
				

			</div>
		  </Fade>
		</div>
	);
};
