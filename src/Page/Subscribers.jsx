import { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import EditMessage from "../Components/EditMessage";
import WriteMessage from "../Components/WriteMessage";

const Subscribers = () => {

    const tableRef = useRef(null);

    const downloadPDF = () => {
        html2canvas(tableRef.current).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            const imgWidth = 210;
            const pageHeight = 295;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let heightLeft = imgHeight;
            let position = 0;

            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }

            pdf.save('table-data.pdf');
        });
    };

    return (
        <div className="space-y-12">
            <p className="border-b border-[#CB0881] inline-block text-[#CB0881] font-bold text-xl">Subscribers</p>
            {/* Table */}
            <div className="overflow-x-auto bg-[#FCEEF8] rounded-xl">
                <div className="flex justify-between pt-5 px-5">
                    <p className="text-[18px] font-bold text-[#CB0881] flex items-center">Trade Schedule</p>
                    <button
                        className="px-4 py-2 rounded-full bg-[#CB0881] text-white"
                        onClick={downloadPDF}
                    >
                        Download
                    </button>
                </div>
                <div ref={tableRef}>
                    <table className="min-w-[100%] shadow-md border mx-auto border-gray-100 mt-6">
                        <thead>
                            <tr className="bg-[#CB0881] text-white">
                                <th className="py-3 px-6 text-left border border-[#CB084B]"># SI</th>
                                <th className="py-3 px-6 text-left border border-[#CB084B]">Email</th>
                                <th className="py-3 px-6 text-left border border-[#CB084B]">Contact</th>
                                <th className="py-3 px-6 border border-[#CB084B]">Subscriber Id</th>
                                <th className="py-3 px-6 border border-[#CB084B]">Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover:bg-gray-50 transition duration-300">
                                <td className="py-4 px-6 border border-l-0 border-[#CB084B] text-center">1</td>
                                <td className="py-4 px-6 border border-[#CB084B] text-center">admin@gmail.com</td>
                                <td className="py-4 px-6 border border-[#CB084B] text-center">01917090220</td>
                                <td className="py-4 px-6 border border-[#CB084B] text-center">011123</td>
                                <td className="py-4 px-6 border border-r-0 border-[#CB084B] text-end flex flex-col lg:flex-row gap-5 justify-center">
                                    <WriteMessage />
                                    <EditMessage />
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition duration-300">
                                <td className="py-4 px-6 border border-l-0 border-[#CB084B] text-center">1</td>
                                <td className="py-4 px-6 border border-[#CB084B] text-center">mahmudul@gmail.com</td>
                                <td className="py-4 px-6 border border-[#CB084B] text-center">01917090220</td>
                                <td className="py-4 px-6 border border-[#CB084B] text-center">011123</td>
                                <td className="py-4 px-6 border border-r-0 border-[#CB084B] text-end flex flex-col lg:flex-row gap-5 justify-center">
                                    <WriteMessage />
                                    <EditMessage />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Subscribers;