const products = [
    {
      id: 1,
      name: 'Bicycle Network in Toulouse',
      href: './GIS/GEOS456-A1.jpg',
      price: 'GEOS 456',
      imageSrc: './GIS/GEOS456-A1.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Geocoding and Networks',
      href: './GIS/GEOS409-A5.jpg',
      price: 'GEOS 409',
      imageSrc: './GIS/GEOS409-A5.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Capstone Project: Web Mapping Application for FortisAlberta',
      href: './GIS/GEOS457_FinalPoster.jpg',
      price: 'GEOS 457',
      imageSrc: './GIS/GEOS457_FinalPoster.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Ecological Assessment at Highfield Farm',
      href: './GIS/GEOS410-A1.jpg',
      price: 'GEOS 450',
      imageSrc: './GIS/GEOS410-A1.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    // More products...
  ]
  
  export default function MyBentoBox() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"
                />
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }
  