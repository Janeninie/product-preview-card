import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center bg-primary-cream p-4">
      <section className="max-w-lg w-full bg-neutral-white grid grid-cols-1 sm:grid-cols-2 rounded-lg">
        <div className="rounded-lg col-span-1 hidden sm:block ">
          <Image
            src={"/images/image-product-desktop.jpg"}
            alt="Product"
            width={400}
            height={500}
            className="object-cover rounded-l-lg"
          />
        </div>
        <div className="rounded-lg col-span-1 sm:hidden flex justify-center">
          <Image
            src={"/images/image-product-mobile.jpg"}
            alt="Product"
            width={400}
            height={500}
            className="object-cover rounded-t-lg w-full"
          />
        </div>
        <div className="sm:p-8 p-6 flex flex-col gap-4 sm:gap-5">
          <div className="w-full flex items-center font-montserrat text-xs font-light text-neutral-darkGrayishBlue">
            P E R F U M E
          </div>
          <div>
            <h1 className="text-3xl font-fraunces leading-7 text-neutral-veryDarkBlue max-sm:w-11/12">
              Gabrielle Essence Eau De Parfum
            </h1>
          </div>
          <div>
            <h1 className="text-sm sm:text-xs text-neutral-darkGrayishBlue">
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </h1>
          </div>
          <div className="flex gap-4 items-center">
            <h1 className="text-3xl font-fraunces text-primary-darkCyan">
              $149.99
            </h1>
            <h1 className="text-xs sm:text-[10px]  text-neutral-darkGrayishBlue line-through">
              $169.99
            </h1>
          </div>
          <button className="w-full bg-primary-darkCyan p-2 rounded-lg flex items-center justify-center gap-2 h-full hover:bg-neutral-veryDarkBlue">
            <div>
              <Image
                src={"/images/icon-cart.svg"}
                alt="Cart"
                width={24}
                height={24}
                className="object-cover w-auto h-auto"
              />
            </div>
            <h1 className="text-neutral-white text-xs font-montserrat max-sm:p-2">
              Add to Cart
            </h1>
          </button>
        </div>
      </section>
    </main>
  );
}
