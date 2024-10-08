export interface Store {
  title: string;
  imageName: string;
  alt: string;
  horario: string;
  categoria:
    | 'Tiendas departamentales'
    | 'Calzado'
    | 'Comidas'
    | 'Electrónicos y telefonia'
    | 'Entretenimiento'
    | 'Ropa y accesorios'
    | 'Servicios, bancos y cajeros'
    | 'Tiendas especializadas'
    | 'Ópticas, salud y belleza'
    | 'Otros';
}

export const stores: Store[] = [
  {
    title: 'HEB',
    imageName: 'logo-heb.png',
    alt: 'Logo HEB',
    horario: `<strong>L-D:</strong> 07:00am - 11:00pm`,
    categoria: 'Tiendas departamentales',
  },
  {
    title: 'CINEPOLIS',
    imageName: 'logo-cinepolis.png',
    alt: 'Logo CINEPOLIS',
    horario: `<strong>L-D:</strong> 09:00am - 09:00pm`,
    categoria: 'Entretenimiento',
  },
  {
    title: 'Del Sol',
    imageName: 'logo-delSol.png',
    alt: 'Logo Woolworth / Del Sol',
    horario: `<strong>L-D:</strong> 10:00am - 08:30pm`,
    categoria: 'Tiendas departamentales',
  },
  {
    title: 'Smart Fit',
    imageName: 'logo-smartfit.png',
    alt: 'Logo Smart Fit',
    horario: `<strong>L-V:</strong> 06:00am - 10:00pm <br/> <strong>S:</strong> 08:00am - 06:00pm`,
    categoria: 'Ópticas, salud y belleza',
  },
  {
    title: 'Parisina',
    imageName: 'logo-parisina.png',
    alt: 'Logo Parisina',
    horario: `<strong>L-S:</strong> 10:00am - 08:00pm <br/> <strong>D:</strong> 10:00am - 07:00pm`,
    categoria: 'Tiendas especializadas',
  },
  {
    title: 'Home Depot',
    imageName: 'logo-homeDepot.png',
    alt: 'Logo Home Depot',
    horario: `<strong>L-D:</strong> 08:00am - 10:00pm`,
    categoria: 'Tiendas especializadas',
  },
  {
    title: 'Office Depot',
    imageName: 'logo-officeDepot.png',
    alt: 'Logo Office Depot',
    horario: `<strong>L-V:</strong> 08:00am - 09:00pm <br/> <strong>S-D:</strong> 09:00am - 09:00am`,
    categoria: 'Tiendas especializadas',
  },
  {
    title: 'Scotiabank',
    imageName: 'logo-scotiabank.png',
    alt: 'Logo Scotiabank',
    horario: `<strong>L-V:</strong> 08:30am - 04:00pm`,
    categoria: 'Servicios, bancos y cajeros',
  },
  {
    title: 'Burger King',
    imageName: 'logo-burgerKing.png',
    alt: 'Logo Burger King',
    horario: `<strong>L-V:</strong> 08:00am - 10:00pm`,
    categoria: 'Comidas',
  },
  {
    title: 'Alitas y Costillas',
    imageName: 'logo-alitas-costillas.jpg',
    alt: 'Logo Alitas y Costillas',
    horario: `<strong>L:</strong> 09:00am - 10:00pm <br/> <strong>M-S:</strong> 09:00am - 12:00am <br/> <strong>D:</strong> 09:00am - 11:00pm`,
    categoria: 'Comidas',
  },
  {
    title: 'Santander-Serfin',
    imageName: 'logo-santander.png',
    alt: 'Logo Santander-Serfin',
    horario: `<strong>L-V:</strong> 09:00am - 04:00pm <br/> <strong>S:</strong> 10:00am - 02:00pm`,
    categoria: 'Servicios, bancos y cajeros',
  },
  {
    title: 'Dulce Sorpresa',
    imageName: 'logo-dulcesorpresa.jpg',
    alt: 'Logo Dulce Sorpresa',
    horario: `<strong>L-S:</strong> 09:00am - 09:00pm <br/> <strong>D:</strong> 10:00am - 08:00pm`,
    categoria: 'Tiendas especializadas',
  },
  {
    title: 'Mas Vision por Menos Precio',
    imageName: 'logo-maspormenos.jpg',
    alt: 'Logo Mas Vision por Menos Precio',
    horario: `<strong>D-V:</strong> 11:00am - 08:00pm <br/> <strong>S:</strong> 11:00am - 09:00pm`,
    categoria: 'Ópticas, salud y belleza',
  },
  {
    title: 'Don Colchon',
    imageName: 'logo-doncolchon.png',
    alt: 'Logo Don Colchon',
    horario: `<strong>L-D:</strong> 10:00am - 08:00pm`,
    categoria: 'Tiendas especializadas',
  },
  {
    title: 'Titanic Optical',
    imageName: 'logo-titanicoptical.png',
    alt: 'Logo Titanic Optical',
    horario: `<strong>L-S:</strong> 10:00am - 08:00pm`,
    categoria: 'Ópticas, salud y belleza',
  },
  {
    title: 'Centro Botanico El Girasol',
    imageName: 'logo-elgirasol.png',
    alt: 'Logo Centro Botanico El Girasol',
    horario: `<strong>L-V:</strong> 10:00am - 09:00pm <br/> <strong>S-D:</strong> 10:00am - 08:00pm`,
    categoria: 'Tiendas especializadas',
  },
  {
    title: 'Momo Family',
    imageName: '',
    alt: 'Logo Momo Family',
    horario: `<strong>L-D:</strong> 10:30am - 09:30pm`,
    categoria: 'Tiendas especializadas',
  },
  {
    title: 'Telcel',
    imageName: 'logo-telcel.png',
    alt: 'Logo Telcel',
    horario: `<strong>L-S:</strong> 12:00pm - 08:00pm <br/> <strong>D:</strong> 12:00pm - 06:00pm`,
    categoria: 'Electrónicos y telefonia',
  },
  {
    title: 'Calza Imagen',
    imageName: 'logo-calzaImagen.png',
    alt: 'Logo Calza Imagen',
    horario: `<strong>L-D:</strong> 10:00am - 08:30pm`,
    categoria: 'Ropa y accesorios',
  },
  {
    title: 'MACROPAY CELULARES A CREDITO',
    imageName: 'logo-macropay.png',
    alt: 'Logo MACROPAY CELULARES A CREDITO',
    horario: `<strong>L-D:</strong> 09:00am - 09:00pm`,
    categoria: 'Electrónicos y telefonia',
  },
  {
    title: 'Fraiche',
    imageName: 'logo-fraiche.png',
    alt: 'Logo Fraiche',
    horario: `<strong>L-D:</strong> 11:00am - 08:00pm`,
    categoria: 'Ópticas, salud y belleza',
  },
  {
    title: 'Ginger',
    imageName: 'logo-ginger.jpg',
    alt: 'Logo Ginger',
    horario: `<strong>L-D:</strong> 10:00am - 09:00pm`,
    categoria: 'Ropa y accesorios',
  },
  {
    title: 'Artesanias',
    imageName: '',
    alt: 'Logo Artesanias',
    horario: `<strong>L-D:</strong> 10:00am - 09:00pm`,
    categoria: 'Tiendas especializadas',
  },
  {
    title: 'GNC',
    imageName: 'logo-gnc.png',
    alt: 'Logo GNC',
    horario: `<strong>L-D:</strong> 09:00am - 09:00pm`,
    categoria: 'Ópticas, salud y belleza',
  },
  {
    title: 'Colchones Luuna',
    imageName: 'logo-luuna.png',
    alt: 'Logo Colchones Luuna',
    horario: `<strong>L-D:</strong> 11:00am - 09:00pm`,
    categoria: 'Tiendas especializadas',
  },
  {
    title: 'Christus Muguerza',
    imageName: 'logo-christusmuguerza.png',
    alt: 'Logo Christus Muguerza',
    horario: `<strong>L-S:</strong> 07:00am - 03:00pm`,
    categoria: 'Ópticas, salud y belleza',
  },
  {
    title: 'Coppel',
    imageName: 'logo-coppel.png',
    alt: 'Logo Coppel Canada',
    horario: `<strong>L-S:</strong> 10:00am - 08:00pm <br/> <strong>D:</strong> 10:30am - 06:00pm`,
    categoria: 'Tiendas departamentales',
  },
  {
    title: 'Sally Beauty Supply',
    imageName: 'logo-sally.png',
    alt: 'Logo Sally Beauty Supply',
    horario: `<strong>L-D:</strong> 11:00am - 09:00pm`,
    categoria: 'Ópticas, salud y belleza',
  },
  {
    title: 'Clinicas Del Azucar',
    imageName: 'logo-clinicadelazucar.png',
    alt: 'Logo Clinicas Del Azucar',
    horario: `<strong>L-V:</strong> 08:00am - 05:00pm <br/> <strong>S:</strong> 08:00am - 02:00pm`,
    categoria: 'Ópticas, salud y belleza',
  },
  {
    title: 'Music & More',
    imageName: 'logo-musicmore.jpg',
    alt: 'Logo Music & More',
    horario: `<strong>L-S:</strong> 10:00am - 02:00pm y 03:00pm - 07:30pm`,
    categoria: 'Tiendas especializadas',
  },
  {
    title: 'Aguillon',
    imageName: 'logo-aguillon.png',
    alt: 'Logo Aguillon',
    horario: `<strong>L-D:</strong> 10:00am - 09:00pm`,
    categoria: 'Ópticas, salud y belleza',
  },
  {
    title: 'Yagger Handbags',
    imageName: 'logo-yagger.jpg',
    alt: 'Logo Yagger Handbags',
    horario: `<strong>L-D:</strong> 10:00am - 09:00pm`,
    categoria: 'Ropa y accesorios',
  },
  {
    title: 'Mini Shop',
    imageName: 'logo-minishop.jpg',
    alt: 'Logo Mini Shop',
    horario: `<strong>L-D:</strong> 10:30am - 09:30pm`,
    categoria: 'Tiendas especializadas',
  },
  {
    title: 'Lovely Bisuteria',
    imageName: 'logo-lovely.png',
    alt: 'Logo Lovely Bisuteria',
    horario: `<strong>L-S:</strong> 11:00am - 07:00pm <br/> <strong>D:</strong> 12:00pm - 06:00pm`,
    categoria: 'Ropa y accesorios',
  },
  {
    title: 'Heaven Accessorios',
    imageName: 'logo-heaven.png',
    alt: 'Logo Heaven Accessorios',
    horario: `<strong>L-D:</strong> 10:00am - 08:00pm`,
    categoria: 'Ópticas, salud y belleza',
  },
  {
    title: 'Ciara',
    imageName: 'logo-ciara.jpg',
    alt: 'Logo Ciara',
    horario: `<strong>L-D:</strong> 10:00am - 09:00pm`,
    categoria: 'Ropa y accesorios',
  },
  {
    title: 'Beya',
    imageName: 'logo-beya.png',
    alt: 'Logo Beya',
    horario: `<strong>L-D:</strong> 11:00am - 08:00pm`,
    categoria: 'Ropa y accesorios',
  },
  {
    title: 'Arantza',
    imageName: 'logo-arantza.png',
    alt: 'Logo Arantza-Flexi',
    horario: `<strong>L-D:</strong> 10:00am - 08:30pm`,
    categoria: 'Calzado',
  },
  {
    title: 'Flexi',
    imageName: 'logo-flexi.png',
    alt: 'Logo Arantza-Flexi',
    horario: `<strong>L-D:</strong> 10:00am - 08:30pm`,
    categoria: 'Calzado',
  },
  {
    title: 'Opa’s',
    imageName: 'logo-opas.png',
    alt: 'Logo Opa’s',
    horario: `<strong>D-M:</strong> 12:00pm - 12:00am <br/> <strong>J-S:</strong> 12:00pm - 02:00am`,
    categoria: 'Comidas',
  },
  {
    title: 'Movistar',
    imageName: 'logo-movistar.png',
    alt: 'Logo Movistar',
    horario: `<strong>L-S:</strong> 10:00am - 07:00pm <br/> <strong>D:</strong> 10:00am - 04:00pm`,
    categoria: 'Electrónicos y telefonia',
  },
  {
    title: 'Rent a Center',
    imageName: 'logo-rentacenter.png',
    alt: 'Logo Rent a Center',
    horario: `<strong>L-S:</strong> 09:00am - 08:00pm <br/> <strong>D:</strong> 10:00am - 07:00pm`,
    categoria: 'Tiendas especializadas',
  },
  {
    title: 'Super Colchones',
    imageName: 'logo-superColchones.png',
    alt: 'Logo Super Colchones',
    horario: `<strong>L-D:</strong> 09:00am - 08:00pm`,
    categoria: 'Tiendas especializadas',
  },
  {
    title: 'CSN Cooperativa Financiera',
    imageName: 'logo-csn.png',
    alt: 'Logo CSN Cooperativa Financiera',
    horario: `<strong>L-V:</strong> 10:00am - 06:30pm <br/> <strong>S:</strong> 10:00am - 04:30pm`,
    categoria: 'Servicios, bancos y cajeros',
  },
  {
    title: 'BBVA BANCOMER',
    imageName: 'logo-bbva.png',
    alt: 'Logo BBVA BANCOMER',
    horario: `<strong>24 horas</strong>`,
    categoria: 'Servicios, bancos y cajeros',
  },
  {
    title: 'FINLAG',
    imageName: 'logo-finlag.png',
    alt: 'Logo FINLAG',
    horario: `<strong>L-V:</strong> 09:00am - 07:00pm <br/> <strong>S:</strong> 09:00am - 02:00pm`,
    categoria: 'Servicios, bancos y cajeros',
  },
  {
    title: 'Modatelas',
    imageName: 'logo-modatelas.png',
    alt: 'Logo Modatelas',
    horario: `<strong>L-S:</strong> 09:00am - 07:00pm`,
    categoria: 'Tiendas especializadas',
  },
  {
    title: 'IZZI',
    imageName: 'logo-izzi.png',
    alt: 'Logo IZZI',
    horario: `<strong>L-V:</strong> 09:00am - 03:00pm <br/> <strong>S:</strong> 09:00am - 03:00pm`,
    categoria: 'Servicios, bancos y cajeros',
  },
  {
    title: 'Compartamos Banco',
    imageName: 'logo-compartamosbanco.png',
    alt: 'Logo Compartamos Banco',
    horario: `<strong>L-V:</strong> 08:00am - 05:00pm`,
    categoria: 'Servicios, bancos y cajeros',
  },
  {
    title: 'Hong Fat',
    imageName: 'logo-hongFat.png',
    alt: 'Logo Hong Fat',
    horario: `<strong>L-V:</strong> 09:00am - 10:00pm <br/> <strong>S-D:</strong> 09:00am - 09:30pm`,
    categoria: 'Comidas',
  },
  {
    title: 'Hong Kong City',
    imageName: '',
    alt: 'Logo Hong Kong City',
    horario: `<strong>L-V:</strong> 09:00am - 10:00pm <br/> <strong>S-D:</strong> 09:00am - 09:30pm`,
    categoria: 'Comidas',
  },
  {
    title: 'Gorditas Los Mandiles',
    imageName: 'logo-gorditaslosmandiles.jpg',
    alt: 'Logo Gorditas Los Mandiles',
    horario: `<strong>L-D:</strong> 08:30am - 09:00pm`,
    categoria: 'Comidas',
  },
  {
    title: 'Elote Real',
    imageName: 'logo-eloteReal.png',
    alt: 'Logo Elote Real',
    horario: `<strong>L-D:</strong> 11:00am - 09:00pm`,
    categoria: 'Comidas',
  },
  {
    title: 'Mui Natural',
    imageName: 'logo-muinatural.jpg',
    alt: 'Logo Mui Natural',
    horario: `<strong>L-D:</strong> 10:00am - 08:30pm`,
    categoria: 'Comidas',
  },
  {
    title: 'AT&T',
    imageName: 'logo-att.png',
    alt: 'Logo AT&T',
    horario: 'S/I',
    categoria: 'Electrónicos y telefonia',
  },
  {
    title: 'La Creperia Le Peche Gourmet',
    imageName: 'logo-lapechegourmet.jpg',
    alt: 'Logo La Creperia Le Peche Gourmet',
    horario: `<strong>L-D:</strong> 10:00am - 09:30pm`,
    categoria: 'Comidas',
  },
  {
    title: 'Celax',
    imageName: 'logo-celax.jpg',
    alt: 'Logo Celax',
    horario: `<strong>L-D:</strong> 09:30am - 09:00pm`,
    categoria: 'Tiendas especializadas',
  },
  {
    title: 'Jaz Movil',
    imageName: 'logo-jazmovil.png',
    alt: 'Logo Jaz Movil',
    horario: `<strong>L-D:</strong> 09:00am - 09:00pm`,
    categoria: 'Tiendas especializadas',
  },
  {
    title: 'Dulces Regionales Artesanales',
    imageName: '',
    alt: 'Logo Dulces Regionales Artesanales',
    horario: `<strong>L-D:</strong> 09:30am - 10:00pm`,
    categoria: 'Comidas',
  },
  {
    title: 'Banorte',
    imageName: 'logo-banorte.png',
    alt: 'Logo Banorte',
    horario: 'Cajero',
    categoria: 'Servicios, bancos y cajeros',
  },
  {
    title: 'Banregio',
    imageName: 'logo-banregio.png',
    alt: 'Logo Banregio',
    horario: 'Cajero',
    categoria: 'Servicios, bancos y cajeros',
  },
  {
    title: 'Cintos y Articulos de Piel',
    imageName: '',
    alt: 'Logo Cintos y Articulos de Piel',
    horario: `<strong>L-D:</strong> 10:00am - 08:30pm`,
    categoria: 'Ropa y accesorios',
  },
  {
    title: 'Cajero Afirme',
    imageName: 'logo-afirme.png',
    alt: 'Logo Cajero Afirme',
    horario: `<strong>L-D:</strong> 07:00am - 11:00pm`,
    categoria: 'Servicios, bancos y cajeros',
  },
  {
    title: 'TU TU PLAY',
    imageName: 'logo-tuTuPlay.png',
    alt: 'Logo TU TU PLAY',
    horario: `<strong>L-D:</strong> 11:00am - 09:00pm`,
    categoria: 'Entretenimiento',
  },
];
