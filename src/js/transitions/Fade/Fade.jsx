import React from 'react';
import { motion } from 'framer-motion';

export const Fade = ({ className, children, ...props }) => {
	return (
		<motion.div
			className={className}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
			{children}
		</motion.div>
	);
};
