import { useRef,useState } from 'react';
import { Background } from './js/components/atoms/Background';
import { ButtonBacksound } from './js/components/molecules/ButtonBacksound';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { ButtonGoHome } from './js/components/molecules/ButtonGoHome';
import { AnimatePresence } from 'framer-motion';
// import Notifications from 'react-notify-toast';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { MainMenu } from './js/pages/MainMenu/MainMenu';
import { Book } from './js/pages/Book/Book';
import { Button } from './js/components/atoms/Button';
import { ButtonHide } from './js/components/atoms/ButtonHide';
import { UsageInstruction } from './js/pages/UsageInstruction/UsageInstruction';
import { Author } from './js/pages/Author/Author';
import { ButtonFullScreen } from './js/components/molecules/ButtonFullScreen';
import { SplashScreen } from './js/pages/SplashScreen/SplashScreen';
import { FinishMenu } from './js/pages/FinishMenu/FinishMenu';
import { Glossary } from './js/pages/Glossary/Glossary';
import { useAppStore } from './js/store/store';
import { Quiz } from './js/pages/Quiz/Quiz';
import { QuizOverview } from './js/pages/Quiz/QuizOverview';
import $ from 'jquery';


function App() {
	const navigate = useNavigate();
	const location = useLocation();

	const { pathname } = location;

	const exportRef = useRef();

	const { showSplashScreen } = useAppStore();

	const IS_AT_HOME = pathname === '/';
	const IS_AT_SPLASH = pathname === '/splash';
	const IS_AT_QUIZ = pathname === '/quiz';
	const AT_FINISH = pathname === '/book/finish';
	const AT_AUTHOR = pathname === '/author';
	const AT_INFO = pathname === '/usage-instruction';

	const buttonPlayPauseRef = useRef(null);

	const [isVisible, setIsVisible] = useState(true);

	// Function to hide the button with ID #buttonPlayPause
	const hideButtonPlayPause = () => {
		$('#buttonPlayPause').hide();
		$('#buttonReplay').hide();
	};

	// Function to show the button with ID #buttonPlayPause
	const showButtonPlayPause = () => {
		$('#buttonPlayPause').show();
		$('#buttonReplay').show();
	};

	// Function to toggle button visibility
	const toggleButtonVisibility = () => {
		setIsVisible(!isVisible);
		const $button = $('#buttonPlayPause');
		if ($button.is(':visible')) {
		hideButtonPlayPause();
		} else {
		showButtonPlayPause();
		}
	};

	return (
		<div ref={exportRef} className="h-screen max-h-screen overflow-hidden">
			<Background />
			<ToastContainer />

			{/* <div className="container h-full max-w-screen-xl mx-auto"> */}
			<div className="container h-full max-w-screen-xl">
				<AnimatePresence mode="wait">
					<Routes location={location} key={pathname}>
						{/* <Route path="/" exact element={<MainMenu />} /> */}
						{/* <Route path="/splash" element={<SplashScreen />} /> */}
						<Route path="/" element={<SplashScreen />} />
						<Route path="/usage-instruction" element={<UsageInstruction />} />
						<Route path="/author" element={<Author />} />
						<Route path="/book" element={<Book />} />
						<Route path="/book/finish" element={<FinishMenu />} />
						<Route path="/glossary" element={<Glossary />} />
						<Route path="/quiz" element={<Quiz />} />
						<Route path="/quiz/overview" element={<QuizOverview />} />
						
					</Routes>
				</AnimatePresence>
			</div>

			{!IS_AT_SPLASH && (
				<div className="absolute flex items-start gap-4 top-5 left-8">
					{!IS_AT_HOME && !IS_AT_QUIZ && !showSplashScreen && !IS_AT_SPLASH && <ButtonGoHome />}
					{IS_AT_HOME && (
						<Button icon={require('./assets/tesbtnpengguna.png')} size="sm" onClick={() => navigate('/usage-instruction')}>
							Petunjuk Penggunaan
						</Button>
					)}
				</div>
			)}

			{!IS_AT_SPLASH && (
				<div className="absolute flex items-start gap-2 top-20 right-8">
					
					<ButtonHide icon={require('./assets/hide.png')} size="sm" onClick={toggleButtonVisibility} className={IS_AT_HOME || AT_FINISH || AT_AUTHOR || AT_INFO ? 'hidden' : ''}>
						{isVisible ? 'Hide' : 'Show'}
					</ButtonHide>
				</div>
			)}
			
			{!IS_AT_SPLASH && (
				<div className="absolute flex items-start gap-4 top-5 right-8">
					<ButtonFullScreen />
					<ButtonBacksound />
				</div>
			)}
		</div>
	);
}

export default App;
