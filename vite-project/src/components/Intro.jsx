import React from 'react';
import {
	wave,
	LinkedIn,
	Github,
	Git,
	Tailwind,
	CSS,
	JavaScript,
	HTML,
	NODE,
	Reacts,
	Personalphoto,
} from '../assets/assets.js';
const images = [
	{ src: HTML, title: 'HTML', link: 'https://www.w3.org/html/' },
	{ src: CSS, title: 'CSS3', link: 'https://www.w3.org/Style/CSS/' },
	{ src: JavaScript, title: 'Javascript', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
	{ src: Reacts, title: 'React JS', link: 'https://reactjs.org/' },
	{ src: Tailwind, title: 'Tailwind CSS', link: 'https://tailwindcss.com/' },
	{ src: Git, title: 'Git', link: 'https://git-scm.com/' },
	{ src: NODE, title: 'Node', link: 'https://nodejs.org/' },
];
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Intro() {
	return (
		<div className="h-screen bg-gray-50 text-gray-800 mx-auto">
			<div className="container mx-auto flex justify-center items-center flex-col pt-40 max-w-fit">
				<div className="hero-main flex gap-24">
					<div className="hero-text w-128">
						<div className="flex flex-col gap-8 text-5xl">
							<div className="flex justify-center">
								<div className="relative">
									<h1 className="text-6xl font-extrabold text-gray-800">
										Front-End React Developer
										<img
											className="h-16 w-16 absolute bottom-0 right-40"
											src={wave}
											alt="wave"
										/>
									</h1>
								</div>
							</div>
							<div>
								<p className="font-normal text-gray-500 text-xl">
									Hi, I'm Pranav Shinde. A passionate Front-end React Developer based in Pune, India.
									{'📍'}
								</p>
								<div className="flex gap-4">
									<a
										aria-label="linkedin"
										target="_blank"
										className="hover:text-blue-500 transition duration-300"
										rel="noreferrer"
										href="https://www.linkedin.com/in/pranaav-shinde-1b8abb1b3/"
									>
										<FontAwesomeIcon
											icon={faLinkedin}
											className="text-3xl"
										/>
									</a>
									<a
										aria-label="github"
										target="_blank"
										className="hover:text-blue-500 transition duration-300"
										rel="noreferrer"
										href="https://github.com/py528"
									>
										<FontAwesomeIcon
											icon={faGithub}
											className="text-3xl"
										/>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div
						className="hero-img rounded-full w-96 h-96 bg-cover bg-center"
						style={{ backgroundImage: `url(${Personalphoto})` }}
					></div>
				</div>
				<div className="skills self-start flex items-center text-2xl pt-20">
					<p className="border-r-2 border-solid border-gray-500 font-mulish font-semibold mr-28 pr-8">
						Tech Stack
					</p>
					<div className="logos">
						<ul className="flex space-x-4 gap-10">
							{images.map((img, index) => (
								<li key={index}>
									<a href={img.link}>
										<div className="relative rounded-full bg-white w-10 h-10 shadow-md flex justify-center items-center">
											<div className="absolute rounded-full bg-white w-18 h-18 shadow-lg"></div>
											<img
												src={img.src}
												title={img.title}
												alt="program_img"
												className="absolute inset-0 h-full w-full object-contain"
											/>
										</div>
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Intro;
