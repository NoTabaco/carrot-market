export default function Home() {
  return (
    <div className="bg-slate-400 py-20 px-10 grid gap-10">
      <div className="bg-white p-7 rounded-3xl shadow-xl">
        <span className="font-semibold text-3xl">Select Item</span>
        <div className="flex justify-between my-2">
          <span className="text-gray-500">Grey Chair</span>
          <span className="font-semibold">$19</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Tooly Table</span>
          <span className="font-semibold">$19</span>
        </div>
        <div className="mt-2 pt-2 border-t-2 border-dashed flex justify-between">
          <span>Total</span>
          <span className="font-semibold">$38</span>
        </div>
        <div className="mt-4 w-1/2 mx-auto bg-blue-500 text-white text-center p-3 rounded-xl">
          Checkout
        </div>
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
            <div className="h-24 w-24 bg-red-400 rounded-full" />
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
      <div className="bg-white p-10 rounded-3xl shadow-xl"></div>
      <div className="bg-white p-10 rounded-3xl shadow-xl"></div>
    </div>
  );
}
