import arrivalData from "../../../../public/dataheadset/arrival.json"; // adjust path as needed
import Image from "next/image";

const getBadgeInfo = () => {
  return { text: "New", color: "text-black" };
};

export default function AllProducts() {
  return (
    <div className="w-full bg-white py-20 px-4 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-gray-900">New Arrivals</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {arrivalData.map((headset) => {
            const badge = getBadgeInfo();
            return (
              <div
                key={headset.id}
                className="group relative bg-white p-4 flex flex-col rounded-lg shadow-sm"
              >
                <div className="relative h-64 w-full mb-4">
                  <span className="absolute top-2 left-2 text-black text-xs font-bold">
                    {badge.text}
                  </span>
                  <Image
                    src={headset.image}
                    alt={headset.title}
                    fill
                    className="object-contain p-4"
                  />
                </div>

                <div className="flex items-center mb-3 text-black">
                  {[...Array(5)].map((_, i) => {
                    const fullStar = i < Math.floor(headset.rating);
                    const isHalfStar =
                      i === Math.floor(headset.rating) &&
                      headset.rating % 1 >= 0.5;

                    return (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          fullStar || isHalfStar
                            ? "text-black"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        {isHalfStar ? (
                          <>
                            <defs>
                              <linearGradient id={`half-grad-${i}`}>
                                <stop
                                  offset="50%"
                                  stopColor="currentColor"
                                />
                                <stop
                                  offset="50%"
                                  stopColor="transparent"
                                />
                              </linearGradient>
                            </defs>
                            <path
                              fill={`url(#half-grad-${i})`}
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.376 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.376-2.454a1 1 0 00-1.175 0l-3.376 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.043 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"
                            />
                          </>
                        ) : (
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.376 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.376-2.454a1 1 0 00-1.175 0l-3.376 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.043 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                        )}
                      </svg>
                    );
                  })}
                </div>

                <div className="mb-4">
                  <h4 className="font-bold text-black text-sm">{headset.title}</h4>
                  <p className="text-black">{headset.category}</p>
                  <span className="text-black font-bold text-sm">{headset.price}</span>
                </div>

                <button className="w-full mt-auto bg-black text-white py-2 rounded-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
                  Add to Cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
