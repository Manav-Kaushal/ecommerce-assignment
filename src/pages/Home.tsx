import Image from "../components/Image";
import MaxWidthContainer from "../components/MaxWidthContainer";
import { collections, perks, trendingProducts } from "../lib/mocks/homeData";

const Home = () => {
  return (
    <div>
      <section className="relative overflow-hidden h-96">
        <Image
          src="https://tailwindui.com/img/ecommerce-images/home-page-04-hero-full-width.jpg"
          alt="banner"
        />
        <div className="absolute inset-0 bg-gray-900/75" />
        <div className="absolute inset-0 z-10 flex items-center justify-center text-white">
          <p className="text-5xl font-semibold">Mid-Season Sale</p>
        </div>
      </section>
      <section className="-mt-28">
        <MaxWidthContainer>
          <div className="flex items-center justify-between gap-x-8 ">
            {collections.map((c) => (
              <div
                key={c.name}
                className="relative overflow-hidden rounded-lg cursor-pointer group"
              >
                <Image src={c.imageSrc} alt={c.imageAlt} />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/50 group-hover:opacity-75" />
                <div className="absolute text-white bottom-4 left-8">
                  <p>Shop the collection</p>
                  <p className="text-lg font-semibold">{c.name}</p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthContainer>
      </section>
      <section aria-labelledby="trending-heading" className="my-16">
        <MaxWidthContainer>
          <div className="md:flex md:items-center md:justify-between">
            <h2
              id="favorites-heading"
              className="text-2xl font-bold tracking-tight text-gray-900"
            >
              Trending Products
            </h2>
            <a
              href="#"
              className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block"
            >
              Shop the collection
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>

          <div className="grid grid-cols-2 mt-6 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
            {trendingProducts.map((product) => (
              <div key={product.id} className="relative group">
                <div className="w-full h-56 overflow-hidden rounded-md group-hover:opacity-75 lg:h-72 xl:h-80">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="object-cover object-center w-full h-full"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">
                  <a href={product.href}>
                    <span className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                <p className="mt-1 text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-sm md:hidden">
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Shop the collection
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </MaxWidthContainer>
      </section>

      <section
        aria-labelledby="perks-heading"
        className="border-t border-gray-200 bg-gray-50"
      >
        <h2 id="perks-heading" className="sr-only">
          Our perks
        </h2>

        <div className="px-4 py-24 mx-auto max-w-7xl sm:px-6 sm:py-32 lg:px-8">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0">
                  <div className="flow-root">
                    <img
                      alt=""
                      src={perk.imageUrl}
                      className="w-auto h-24 mx-auto -my-1"
                    />
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-gray-500">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
