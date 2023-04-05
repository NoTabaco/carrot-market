export default function Home() {
  return (
    <div className="bg-slate-400 py-20 px-10 grid gap-10 min-h-screen">
      <div className="bg-white p-7 rounded-3xl shadow-xl">
        <span className="font-semibold text-3xl">Select Item</span>
        <ul>
          {[1, 2, 3, 4].map((_, index) => (
            <div key={index} className="flex justify-between my-2">
              <span className="text-gray-500">Grey Chair</span>
              <span className="font-semibold">$19</span>
            </div>
          ))}
        </ul>
        <ul>
          {["a", "b", "c", ""].map((item, index) => (
            <li key={index} className="bg-red-500 py-2 empty:hidden">
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-2 pt-2 border-t-2 border-dashed flex justify-between">
          <span>Total</span>
          <span className="font-semibold">$38</span>
        </div>
        <button className="block mt-4 w-1/2 mx-auto bg-blue-500 text-white text-center p-3 rounded-xl hover:bg-teal-500 hover:text-black active:bg-yellow-500 focus:bg-red-500">
          Checkout
        </button>
      </div>
      <div className="bg-blue-500 rounded-3xl shadow-xl">
        <div className="p-6 pb-16 flex justify-between">
          <span className="text-white text-xl">Profile</span>
          <span className="text-white text-xl">🇺🇸</span>
        </div>
        <div className="rounded-[32px] p-6 bg-white relative -top-5 h-[70%]">
          <div className="flex justify-between items-end relative -top-16">
            <div className="flex flex-col items-center relative top-4 left-3">
              <span className="mb-[5px] text-sm text-gray-500">Orders</span>
              <span className="font-medium">340</span>
            </div>
            <div className="h-24 w-24 bg-gray-300 rounded-full" />
            <div className="flex flex-col items-center relative top-4 right-3">
              <span className="mb-[5px] text-sm text-gray-500">Spent</span>
              <span className="font-medium">$2,310</span>
            </div>
          </div>
          <div className="flex flex-col items-center -mt-7 -mb-10">
            <span className="font-medium text-lg">Tony Molloy</span>
            <span className="text-sm text-gray-500">New York, USA</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-7 rounded-3xl shadow-xl mt-[22px]">
        <div className="flex justify-between items-center mb-5">
          <span>⬅️</span>
          <div className="space-x-4">
            <span>🌟 &nbsp;4.9</span>
            <span className="shadow-xl p-2 rounded-md">💖</span>
          </div>
        </div>
        <div className="bg-zinc-400 h-60 mb-3" />
        <div className="flex flex-col">
          <span className="font-medium text-xl">Swoon Lounge</span>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="mt-1 mb-6 flex justify-between items-center">
            <div className="space-x-2">
              <button className="bg-pink-500 w-5 h-5 rounded-full focus:ring-2 ring-offset-2 ring-pink-500 transition" />
              <button className="bg-indigo-500 w-5 h-5 rounded-full focus:ring-2 ring-offset-2 ring-indigo-500 transition" />
              <button className="bg-purple-500 w-5 h-5 rounded-full focus:ring-2 ring-offset-2 ring-purple-500 transition" />
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-blue-200 flex justify-center items-center aspect-square w-9 text-xl text-gray-500 rounded-lg">
                -
              </button>
              <span>1</span>
              <button className="bg-blue-200 flex justify-center items-center aspect-square w-9 text-xl text-gray-500 rounded-lg">
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-2xl">$450</span>
            <button className="py-2 px-8 bg-blue-500 text-sm text-center text-white rounded-lg">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
