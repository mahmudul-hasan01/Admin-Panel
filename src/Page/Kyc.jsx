import { TfiWrite } from "react-icons/tfi";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const Kyc = () => {
    return (
        <div>
            <p className="border-b border-[#CB0881] inline-block text-[#CB0881] font-bold text-xl">KYC Form</p>
            {/* Form 1 */}
            <form className="pb-5 pt-3 lg:pb-10 lg:pt-5 pr-[70px]">
                <div className="space-y-5">
                    <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                        <label className="block font-medium text-start" htmlFor="_email">
                            Select Input Type
                        </label>
                        <select className="rounded-lg border border-black w-full bg-transparent px-4 py-2 focus:outline-none">
                            <option value="Input">Input</option>
                            <option value="Text">Text</option>
                            <option value="Image">Image</option>
                        </select>
                    </div>
                    <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                        <label className="block font-medium text-start" htmlFor="_email">
                            Label
                        </label>
                        <input className="rounded-lg border w-full border-black bg-transparent px-4 py-2 focus:outline-none" type="text" />
                    </div>
                    <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                        <label className="block font-medium text-start" htmlFor="_email">
                            Required
                        </label>
                        <select className="rounded-lg border border-black w-full bg-transparent px-4 py-2 focus:outline-none">
                            <option value="Yes">Yes</option>
                            <option value="Text">Text</option>
                            <option value="Image">Image</option>
                        </select>
                    </div>
                </div>
                <div className="flex justify-end">
                    <button type="button" className="py-2 px-4 rounded-full mt-6 bg-[#CB0881] text-white drop-shadow-lg ">
                        + Add Field
                    </button>
                </div>
            </form>
            <p className="border-[#CB084B] border-b-2 w-full"></p>
            {/* Form 2 */}
            <form className="pb-5 pt-3 lg:pb-10 lg:pt-5">
                <div className="space-y-5">
                    <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                        <label className="block font-medium text-start" htmlFor="_email">
                            Full Name (Required)
                        </label>
                        <div className="flex items-center gap-2 ">
                            <input className="rounded-lg border w-full border-black bg-transparent px-4 py-2 focus:outline-none" type="text" placeholder="full name" />

                            <TfiWrite className="text-2xl text-[#CB084B]" />
                            <FaArrowAltCircleLeft className="text-2xl text-[#CB084B]" />
                        </div>
                    </div>
                    <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                        <label className="block font-medium text-start" htmlFor="_email">
                            NID
                        </label>
                        <div className="flex items-center gap-2 ">
                            <input className="rounded-lg border w-full border-black bg-transparent px-4 py-2 focus:outline-none" type="file" />
                            <TfiWrite className="text-2xl text-[#CB084B]" />
                            <FaArrowAltCircleLeft className="text-2xl text-[#CB084B]" />
                        </div>
                    </div>
                    <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                        <label className="block font-medium text-start" htmlFor="_email">
                            Present Address (Required)
                        </label>
                        <div className="flex items-center gap-2 ">
                            <input className="rounded-lg border w-full border-black bg-transparent px-4 py-2 focus:outline-none" type="text" />
                            <TfiWrite className="text-2xl text-[#CB084B]" />
                            <FaArrowAltCircleLeft className="text-2xl text-[#CB084B]" />
                        </div>
                    </div>
                    <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                        <label className="block font-medium text-start" htmlFor="_email">
                            Permanent Address (Required)
                        </label>
                        <div className="flex items-center gap-2 ">
                            <input className="rounded-lg border w-full border-black bg-transparent px-4 py-2 focus:outline-none" type="text" />
                            <TfiWrite className="text-2xl text-[#CB084B]" />
                            <FaArrowAltCircleLeft className="text-2xl text-[#CB084B]" />
                        </div>
                    </div>
                    <div className="flex justify-end mr-[70px]">
                        <button type="submit" className="py-2 px-4 rounded-full mt-6 bg-[#CB0881] text-white drop-shadow-lg ">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Kyc;