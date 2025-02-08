export default function ContactUs() {
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-5xl mt-[35px]">
        TI TROVI NELLA PAGINA "CONTACT US!!"
      </h1>
      <p className="text-center text-lg mt-[35px]">
        Rimani in contatto con noi! Hai bisogno di assistenza o informazioni?
      </p>
      <div className="container flex justify-center items-center">
        <img
          className="w-150 h-90 mt-[17px] mr-[35px] rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
          src="./img/ESTERNA_138.png"
          alt=""
        />
        <div className="contanier text-center text-lg">
          <p><strong>Ecco come puoi contattarci:</strong></p>
          <p className="mt-[10px]">📧 Email: support@contactus138.com</p>
          <p className="mt-[10px]">📞 Telefono: +39 123 456 7890</p>
          <p className="mt-[10px]">📍 Indirizzo: Via Esempio, 138, Milano, Italia</p>
        </div>
      </div>
      <p className="text-center text-lg mt-[35px]">
        Siamo sempre disponibili per rispondere alle tue domande. Contattaci e
        ti aiuteremo nel minor tempo possibile!
      </p>
      <div className="max-w-md mx-auto mt-[35px] mb-[35px] p-5 bg-white shadow-lg rounded-xl">
        <h1 className="text-center text-4xl">ORARI DI APERTURA</h1>
        <table className="w-full border-collapse border border-gray-300 mt-[25px]">
          <thead>
            <tr className="bg-[#d4bb9b]">
              <th className="border border-gray-300 px-4 py-2 text-left">
                Giorno
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Orario
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                Lunedì - Venerdì
              </td>
              <td className="border border-gray-300 px-4 py-2">
                07:00 - 19:30
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">Sabato</td>
              <td className="border border-gray-300 px-4 py-2">
                07:00 - 20:00
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Domenica</td>
              <td className="border border-gray-300 px-4 py-2">
                08:00 - 13:00
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
