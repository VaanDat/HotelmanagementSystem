import { useState, useEffect } from "react";
import moment from 'moment';
import RevenueList from "./RevenueList/RevenueList";

export default function Revenue() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [openReceiptList, setOpenReceiptList] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);

  const handleCardClick = (month, year) => {
    setSelectedCard(null);
    setSelectedMonth(moment(month, 'MMMM').format('M'));
    setSelectedYear(year);
    setOpenReceiptList(true);
  };

  const getPastMonths = () => {
    const months = [];
    const currentYear = moment().format('YYYY');

    for (let i = 11; i >= 0; i--) {
      const month = moment().subtract(i, 'months').format('MMMM');
      const year = moment().subtract(i, 'months').format('YYYY');
      const monthYear = `${month} ${year}`;
      months.push(monthYear);
    }

    return months;
  };

  const setdeliverstate = (data) => {
    if (!data) {
      setOpenReceiptList(false);
    }
  };

  const [ReservationData, setData] = useState([]);

  const [RoomsTypeData, setRTData] = useState([]);

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("userAuth"))
    let userid = user.ID;
    const getRoomsType = async () => {
      try{
      const response = await fetch(`http://localhost:5000/roomstype?userId=${userid}`);
      const jsonData = await response.json(); 
      console.log(jsonData);
      setRTData(jsonData);
      } catch (error){
        console.error("Error fetching data:", error);
      }
    }
    getRoomsType()
  },[])


  const renderMonthCards = () => {
    const months = getPastMonths();
    const uniqueYears = [...new Set(months.map(month => moment(month, 'MMMM YYYY').format('YYYY')))];
    const sortedYears = uniqueYears.sort((a, b) => moment(b, 'YYYY') - moment(a, 'YYYY'));
    const groupedMonths = {};

    sortedYears.forEach(year => {
      groupedMonths[year] = months.filter(month => moment(month, 'MMMM YYYY').format('YYYY') === year);
    });

    return sortedYears.map(year => (
      <div key={year}>
        <h2 className="text-xl font-bold mt-8 mb-4">{year}</h2>
        <div className="grid grid-cols-5 gap-x-12 grid-flow-row gap-4">
          {groupedMonths[year].map((month, index) => (
            <div
              onClick={() => handleCardClick(moment(month, 'MMMM YYYY').format('MMMM'), moment(month, 'MMMM YYYY').format('YYYY'))}
              key={index}
              className="max-w-xl p-6 w-[10rem] h-[5rem] flex items-center justify-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 className="mb-2 text-lg font-normal tracking-tight text-gray-900 dark:text-white">{moment(month, 'MMMM YYYY').format('M')}</h5>
            </div>
          ))}
        </div>
      </div>
    ));
  };



  return (
    <div className="list relative">
      <div className="relative">
        <div className="relative top-[120px] font-neon">
          {!openReceiptList ? (
            <div>{renderMonthCards()}</div>
          ) : (
            <RevenueList deliverstate={setdeliverstate} month={selectedMonth} year={selectedYear} />
          )}
        </div>
      </div>
    </div>
  );
}
