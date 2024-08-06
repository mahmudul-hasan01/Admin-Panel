
const Trade = () => {
    return (
        <div>
            {/* Table */}
            <div className="flex gap-4 justify-center mt-10">
                {/* Table 1 */}
                <div className="overflow-x-auto w-3/6 bg-[#FCEEF8] rounded-xl">
                    <div className="flex justify-between pt-5 px-5">
                        <p className="text-[18px] font-bold text-[#CB0881] flex items-center">Trade Shedule</p>
                        <button className="px-3 py-2 rounded-full bg-[#CB0881] text-white">+ Add New </button>
                    </div>
                    <table className="min-w-[100%] shadow-md  border mx-auto border-gray-100  mt-6">
                        <thead>
                            <tr className="bg-[#CB0881] text-white">
                                <th className="py-3 px-6 text-left border border-[#CB084B]">Unit</th>
                                <th className="py-3 px-6 text-left border border-[#CB084B]">Duration</th>
                                <th className="py-3 px-6  border border-[#CB084B] ">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover:bg-gray-50 transition duration-300">
                                <td className="py-4 px-6 border border-l-0 border-[#CB084B]">Seconds</td>
                                <td className="py-4 px-6 border border-[#CB084B]">20 Secods</td>
                                <td className="py-4 px-6 border border-r-0 border-[#CB084B] text-end space-x-2">
                                    <button className="px-4 py-1 rounded-full bg-[#3470E4] text-white">Edit</button>
                                    <button className="px-3 py-1 rounded-full bg-[#949393] text-white">Delete</button>
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition duration-300">
                                <td className="py-4 px-6 border border-l-0 border-[#CB084B]">Minutes</td>
                                <td className="py-4 px-6 border border-[#CB084B]">24 Minutes</td>
                                <td className="py-4 px-6 border border-r-0 border-[#CB084B] text-end space-x-2">
                                    <button className="px-4 py-1 rounded-full bg-[#3470E4] text-white">Edit</button>
                                    <button className="px-3 py-1 rounded-full bg-[#949393] text-white">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Table 2*/}
                <div className="overflow-x-auto w-3/6 bg-[#FCEEF8] rounded-xl">
                    <div className="flex justify-between pt-5 px-5">
                        <p className="text-[18px] font-bold text-[#CB0881] flex items-center">Trade Method</p>
                        <button className="px-3 py-2 rounded-full bg-[#CB0881] text-white">+ Add New </button>
                    </div>
                    <table className="min-w-[100%] shadow-md  border mx-auto border-gray-100  mt-6">
                        <thead>
                            <tr className="bg-[#CB0881] text-white">
                                <th className="py-3 px-6 text-left border border-[#CB084B]">Name</th>
                                <th className="py-3 px-6 text-left border border-[#CB084B]">Symbol</th>
                                <th className="py-3 px-6  border border-[#CB084B] ">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover:bg-gray-50 transition duration-300">
                                <td className="py-4 px-6 border border-l-0 border-[#CB084B]">Bitcoin</td>
                                <td className="py-4 px-6 border border-[#CB084B]">BTC</td>
                                <td className="py-4 px-6 border border-r-0 border-[#CB084B] text-end space-x-2">
                                    <button className="px-4 py-1 rounded-full bg-[#3470E4] text-white">Edit</button>
                                    <button className="px-3 py-1 rounded-full bg-[#949393] text-white">Delete</button>
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition duration-300">
                                <td className="py-4 px-6 border border-l-0 border-[#CB084B]">XRP</td>
                                <td className="py-4 px-6 border border-[#CB084B]">XRP</td>
                                <td className="py-4 px-6 border border-r-0 border-[#CB084B] text-end space-x-2">
                                    <button className="px-4 py-1 rounded-full bg-[#3470E4] text-white">Edit</button>
                                    <button className="px-3 py-1 rounded-full bg-[#949393] text-white">Delete</button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>

            </div>

            {/* All Bots */}
            <div className="py-10 space-y-10">
                <div className="flex justify-between pt-5 px-5">
                    <p className="border-b border-[#CB0881] inline-block text-[#CB0881] font-bold text-xl">All Bots</p>
                    <button className="px-3 py-2 rounded-full bg-[#CB0881] text-white">+ Add New </button>
                </div>
                <div className="flex justify-center gap-8">
                    <div className="w-36 h-14  bg-[#FCEEF8] pl-2 pt-1 rounded-xl">
                        <p className="font-semibold">Total Bots</p>
                        <p className="text-[#CB0881] font-bold">3</p>
                    </div>
                    <div className="w-36 h-14  bg-[#FCEEF8] pl-2 pt-1 rounded-xl">
                        <p className="font-semibold">Total Activities</p>
                        <p className="text-[#CB0881] font-bold">10</p>
                    </div>
                    <div className="w-36 h-14  bg-[#FCEEF8] pl-2 pt-1 rounded-xl">
                        <p className="font-semibold">Total Activities</p>
                        <p className="text-[#CB0881] font-bold">10</p>
                    </div>
                    <div className="w-36 h-14  bg-[#FCEEF8] pl-2 pt-1 rounded-xl">
                        <p className="font-semibold">Total Trades</p>
                        <p className="text-[#CB0881] font-bold">10</p>
                    </div>
                    <div className="w-36 h-14  bg-[#FCEEF8] pl-2 pt-1 rounded-xl">
                        <p className="font-semibold">Portfolio</p>
                        <p className="text-[#CB0881] font-bold">USD 15,900.00</p>
                    </div>
                    <div className="w-36 h-14  bg-[#FCEEF8] pl-2 pt-1 rounded-xl">
                        <p className="font-semibold">Portfolio Balance</p>
                        <p className="text-[#CB0881] font-bold">USD 15,900.00</p>
                    </div>
                </div>
            </div>

            {/* Info */}
            <div className="flex gap-20">
                {/* 1111 */}
                <div className="relative flex justify-between w-96 h-48 bg-[#FCEEF8] rounded-xl">
                    <div className="pl-4 pt-2 text-[#CB0881] font-semibold space-y-2">
                        <h1>TR-37-3KT</h1>
                        <div>
                            <h1 className="text-[#292929]">TRADING PORTFOLIO</h1>
                            <p>USD 100.00 - USD 999.00</p>
                            <h1 className="text-[#292929]">AVG. DAILY PNL</h1>
                            <p>0.8% - 0.2%</p>
                            <h1 className="text-[#292929]">TRADING PERIOD</h1>
                            <p>5 days</p>
                        </div>
                    </div>
                    <img className="w-36" src="https://s3-alpha-sig.figma.com/img/062f/2f4a/cd5280f24413db7b32b34418ae6290e0?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fKVDt77-05rZ6CehBEUBjSAdCUi9s3TvzA5EPp1HsfOlZUqIwnk4wEHZU6eJ-YvT5dU0rD1O84BJAWwDefQ70V9q6uUDBqWSWxHxHr1WQSW~COi2-TFT63psG6LFvuAYVDSzK~xEhoYfZ1a7t-smDjNuPibG-TLXtWprjqH~HTyyBiFVOC2MZeIyfPEU5YNsEc7kZ71cFVRD47draeGhiICZVNsNc9u1TzPG4cNUtPY0FBjY6r8DOKRavrVSGDoq3wq-s8tKynyvIJ2F0mtrXP0eHspWR6yAUWTEt2EI1RwLzkUkuT4yR0bGI7WFy5x8jfSeDHd3mgpXlgS4iNo4kA__" alt="" />
                    <button className="absolute -right-5 -top-3 px-4 py-1 rounded-full bg-[#3470E4] text-white">Edit</button>
                </div>
                {/* 2222 */}
                <div className="relative flex justify-between w-96 h-48 bg-[#FCEEF8] rounded-xl">
                    <div className="pl-4 pt-2 text-[#CB0881] font-semibold space-y-2">
                        <h1>TR-37-3KT</h1>
                        <div>
                            <h1 className="text-[#292929]">TRADING PORTFOLIO</h1>
                            <p>USD 100.00 - USD 999.00</p>
                            <h1 className="text-[#292929]">AVG. DAILY PNL</h1>
                            <p>0.8% - 0.2%</p>
                            <h1 className="text-[#292929]">TRADING PERIOD</h1>
                            <p>5 days</p>
                        </div>
                    </div>
                    <img className="w-36" src="https://s3-alpha-sig.figma.com/img/062f/2f4a/cd5280f24413db7b32b34418ae6290e0?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fKVDt77-05rZ6CehBEUBjSAdCUi9s3TvzA5EPp1HsfOlZUqIwnk4wEHZU6eJ-YvT5dU0rD1O84BJAWwDefQ70V9q6uUDBqWSWxHxHr1WQSW~COi2-TFT63psG6LFvuAYVDSzK~xEhoYfZ1a7t-smDjNuPibG-TLXtWprjqH~HTyyBiFVOC2MZeIyfPEU5YNsEc7kZ71cFVRD47draeGhiICZVNsNc9u1TzPG4cNUtPY0FBjY6r8DOKRavrVSGDoq3wq-s8tKynyvIJ2F0mtrXP0eHspWR6yAUWTEt2EI1RwLzkUkuT4yR0bGI7WFy5x8jfSeDHd3mgpXlgS4iNo4kA__" alt="" />
                    <button className="absolute -right-5 -top-3 px-4 py-1 rounded-full bg-[#3470E4] text-white">Edit</button>
                </div>
            </div>

        </div>
    );
};

export default Trade;