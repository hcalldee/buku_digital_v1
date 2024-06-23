import { useRef } from 'react';
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
import { UsageInstruction } from './js/pages/UsageInstruction/UsageInstruction';
import { Author } from './js/pages/Author/Author';
import { ButtonFullScreen } from './js/components/molecules/ButtonFullScreen';
import { SplashScreen } from './js/pages/SplashScreen/SplashScreen';
import { FinishMenu } from './js/pages/FinishMenu/FinishMenu';
import { Glossary } from './js/pages/Glossary/Glossary';
import { useAppStore } from './js/store/store';
import { Quiz } from './js/pages/Quiz/Quiz';
import { QuizOverview } from './js/pages/Quiz/QuizOverview';


function App() {
	const navigate = useNavigate();
	const location = useLocation();

	const { pathname } = location;

	const exportRef = useRef();

	const { showSplashScreen } = useAppStore();

	const IS_AT_HOME = pathname === '/';
	const IS_AT_SPLASH = pathname === '/splash';
	const IS_AT_QUIZ = pathname === '/quiz';

	return (
		<div ref={exportRef} className="h-screen max-h-screen overflow-hidden">
			<Background />
			<ToastContainer />

			<div className="container h-full max-w-screen-xl mx-auto">
				<AnimatePresence mode="wait">
					<Routes location={location} key={pathname}>
						<Route path="/" exact element={<MainMenu />} />
						<Route path="/splash" element={<SplashScreen />} />
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
				<div className="absolute flex items-start gap-4 top-5 right-8">
					<ButtonFullScreen />
					<ButtonBacksound />
				</div>
			)}
		</div>
	);
}

export default App;
