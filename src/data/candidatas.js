// src/data/candidatas.js

// Función para generar un slug amigable para URL (ej. "Juana Sofía Rodríguez" -> "juana-sofia-rodriguez")
const generateSlug = (name) => {
	return name
		.toLowerCase()
		.normalize('NFD') // Normaliza para manejar acentos
		.replace(/[\u0300-\u036f]/g, '') // Elimina diacríticos (acentos, ñ)
		.replace(/[^a-z0-9]+/g, '-') // Reemplaza no alfanuméricos por guiones
		.replace(/^-+|-+$/g, ''); // Elimina guiones al inicio o final
};

// Define tu lista de candidatas
export const candidatas = [
	{
		id: 1,
		name: 'Juana Sofía Rodríguez',
		age: 22,
		city: 'Asunción',
		description:
			'Apasionada por la danza contemporánea y defensora de la educación artística para jóvenes.',
		imageUrl: '/images/miss-bebota-1.jpg', // Ruta directa a la carpeta public
		instagram: 'anasofia_rdz_py', // Solo el nombre de usuario de Instagram
		voteLink: 'https://www.instagram.com/anasofia_rdz_py/vote', // **<-- Pega la URL REAL de la publicación de Instagram aquí**
		isFeatured: true, // Destacada, si la usas en algún lugar
	},
	{
		id: 2,
		name: 'Luisa Fernanda Cáceres',
		age: 20,
		city: 'Encarnación',
		description:
			'Estudiante de diseño de modas, sueña con crear una línea de ropa sostenible y chic.',
		imageUrl: '/images/miss-bebota-2.jpg',
		instagram: 'luisa_caceres_py',
		voteLink: 'https://www.instagram.com/anasofia_rdz_py/vote', // **<-- Pega la URL REAL de la publicación de Instagram aquí**
	},
	{
		id: 3,
		name: 'María Alejandra Gómez',
		age: 23,
		city: 'Ciudad del Este',
		description:
			'Emprendedora social que busca empoderar a mujeres a través de talleres de habilidades.',
		imageUrl: '/images/miss-bebota-3.jpg',
		instagram: 'maria_gomezpy',
		voteLink: 'https://www.instagram.com/anasofia_rdz_py/vote', // **<-- Pega la URL REAL de la publicación de Instagram aquí**
		isFeatured: true, // Destacada
	},
	{
		id: 4,
		name: 'Valentina Benítez',
		age: 19,
		city: 'Luque',
		description:
			'Amante de la naturaleza y el activismo ambiental, promueve la reforestación en su comunidad.',
		imageUrl: '/images/miss-bebota-4.jpg',
		instagram: 'valentinabn_oficial',
		voteLink: 'https://www.instagram.com/anasofia_rdz_py/vote', // **<-- Pega la URL REAL de la publicación de Instagram aquí**
	},
	{
		id: 5,
		name: 'Gabriela Díaz',
		age: 21,
		city: 'San Lorenzo',
		description:
			'Futura psicóloga infantil, dedica su tiempo libre al voluntariado en hogares de niños.',
		imageUrl: '/images/miss-bebota-5.jpg',
		instagram: 'gaby.diaz_py',
		voteLink: 'https://www.instagram.com/anasofia_rdz_py/vote', // **<-- Pega la URL REAL de la publicación de Instagram aquí**
	},
	{
		id: 6,
		name: 'Sofía Montiel',
		age: 24,
		city: 'Lambaré',
		description:
			'Apasionada por la gastronomía paraguaya y promotora de la cultura local a través de la cocina.',
		imageUrl: '/images/miss-bebota-6.jpg',
		instagram: 'sofiamontiel_ofc',
		voteLink: 'https://www.instagram.com/anasofia_rdz_py/vote', // **<-- Pega la URL REAL de la publicación de Instagram aquí**
	},
	{
		id: 7,
		name: 'Camila Rojas',
		age: 20,
		city: 'Fernando de la Mora',
		description:
			'Artista plástica con un enfoque en el arte inclusivo y la expresión personal.',
		imageUrl: '/images/miss-bebota-1.jpg', // Usando una imagen repetida para el ejemplo
		instagram: 'camilars_art',
		voteLink: 'https://www.instagram.com/anasofia_rdz_py/vote', // **<-- Pega la URL REAL de la publicación de Instagram aquí**
		isFeatured: true, // Destacada
	},
	{
		id: 8,
		name: 'Laura Samaniego',
		age: 25,
		city: 'Capiatá',
		description:
			'Abogada en formación, defensora de los derechos de la mujer y la equidad de género.',
		imageUrl: '/images/miss-bebota-3.jpg', // Usando una imagen repetida para el ejemplo
		instagram: 'laurasamaniego_py',
		voteLink: 'https://www.instagram.com/anasofia_rdz_py/vote', // **<-- Pega la URL REAL de la publicación de Instagram aquí**
	},
	// Puedes añadir más candidatas aquí.
];

// Mapeamos los datos para añadir campos derivados automáticamente:
// - `slug`: La URL amigable para la página de cada candidata.
// - `instagramUrl`: La URL completa al perfil de Instagram de la candidata.
// El `voteLink` ya está listo directamente en el objeto de la candidata.
export const processedCandidatas = candidatas.map((candidata) => ({
	...candidata,
	slug: generateSlug(candidata.name),
	instagramUrl: `https://www.instagram.com/${candidata.instagram}`, // Construye la URL del perfil
}));
