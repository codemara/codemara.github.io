
const boxAuto = [
    {
      id: 1,
      name: 'The Experience Builder Proof of concept',
      href: './GIS/GEOS459-WebMap.jpg',
      sub: 'GEOS459: GIS Capstone',
      imageSrc: './GIS/GEOS459-WebMap.jpg',
      imageAlt: '',
    },
    {
      id: 2,
      name: 'Coderun demonstration',
      href: './GIS/GEOS459-WebMap.jpg',
      sub: 'GEOS459: GIS Capstone',
      imageSrc: '/GIS/GEOS459-WebMap.jpg',
      imageAlt: '',
    },
    {
      id: 3,
      name: 'Code Source',
      href: 'https://www.github.com',
      sub: 'GEOS459: GIS Capstone',
      imageSrc: './GIS/GEOS459-WebMap.jpg',
      imageAlt: '',
    },
    {
      id: 4,
      name: 'Greenhouse automation',
      href: './GIS/GEOS410-A1.jpg',
      sub: 'Vertiponic',
      imageSrc: './GIS/GEOS410-A1.jpg',
      imageAlt: '',
    }
  ]

  const boxVisual = [
    {
      id: 1,
      name: 'Bicycle Network in Toulouse',
      href: './GIS/GEOS456-A1.jpg',
      sub: 'GEOS456: GIS Programming',
      imageSrc: './GIS/GEOS456-A1.jpg',
      imageAlt: '',
    },
    {
      id: 2,
      name: 'Geocoding and Networks',
      href: './GIS/GEOS409-A5.jpg',
      sub: 'GEOS409: GIS Data Capture I',
      imageSrc: './GIS/GEOS409-A5.jpg',
      imageAlt: '',
    },
    {
      id: 3,
      name: 'Final Poster',
      href: './GIS/GEOS457_FinalPoster.jpg',
      sub: 'GEOS457: Cartography',
      imageSrc: './GIS/GEOS457_FinalPoster.jpg',
      imageAlt: '',
    },
    {
      id: 4,
      name: 'Ecological Assessment at Highfield Farm',
      href: './GIS/GEOS451-A3.jpg',
      sub: 'GEOS451: Data Capture II',
      imageSrc: './GIS/GEOS451-A3.jpg',
      imageAlt: '',
    },
    // More products...
  ]
  interface ObjSection {
    [key: string]: any; 
    }

  const objSection:ObjSection = {"Auto": boxAuto, "Visual": boxVisual}

  export default function MyBentoBox(myProps: { zeSection: string }) {

    const localData = objSection[myProps.zeSection];

    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {localData.map((item: any) => (
              <a key={item.id} href={item.href} className="group">
                <img
                  alt={item.imageAlt}
                  src={item.imageSrc}
                  className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"
                />
                <h3 className="mt-4 text-sm text-gray-700">{item.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{item.sub}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }
  