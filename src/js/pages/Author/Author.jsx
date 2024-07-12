import { Button } from '../../components/atoms/Button';
import { Fade } from '../../transitions/Fade/Fade';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Author = () => {
	const navigate = useNavigate();
	return (
		<Fade>
			<div className="w-full max-h-[80vh] px-6 lg:px-20 py-10 mt-16 mb-8 space-y-10 overflow-y-scroll bg-white bg-opacity-50 rounded-lg shadow-lg">
				<div>
					<h1 className="text-lg font-bold text-center lg:text-xl">Biografi Penulis</h1>
				</div>
				<hr />
				<div className="grid gap-12">
					<div className="flex flex-col gap-6 text-sm leading-relaxed text-center lg:text-base lg:text-left lg:col-span-2 lg:flex-row">
						<div className="flex flex-col items-center space-y-3 lg:items-start">
							<img src={require('../../../assets/author.jpg')} alt="" className="object-cover w-40 rounded-xl lg:w-60" />
							<div>
								<div className="font-semibold">Gherennita Octaviani Dewi</div>
								<div>Penulis</div>
							</div>
						</div>
						<div className="w-full">
							<p>
							Gherennita Octaviani Dewi atau yang sering dipanggil Gheren 
							merupakan mahasiswa di Universitas Negeri Jakarta jurusan Pendidikan Guru Sekolah Dasar. 
							Merupakan anak terakhir dari 2 bersaudara yang dilahirkan pada bulan oktober 1999. 
							Memiliki ketertarikan pada pembelajaran IPA, didasari hal tersebut ia melakukan penelitian 
							dengan membuat media audio visual untuk pembelajaran IPA.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="flex items-center justify-center">
				<Button label="Kembali" onClick={() => navigate('../book/finish')}/>
			</div>
		</Fade>
	);
};
