import { useEffect, useState } from "react";
import axios from "axios";
import CustomerTable from "../../components/Table/CustomerTable";
import TransactionChart from "../../components/Chart/TransactionChart";

const Customers = () => {
  const [data, setData] = useState({ customers: [], transactions: [] });
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const { data } = await axios.get("http://localhost:5000/api/data");
        console.log(data);
        setData(data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    }

    getData();
  }, []);

  return (
    <div className="hero w-[] mx-auto bg-[#0F1218] min-h-screen">
      <div className="w-full grid placeholder: text-center">
        <div className="w-full grid placeholder:">
          <h1>Customer Transactions</h1>
          <CustomerTable
            data={data}
            setSelectedCustomer={setSelectedCustomer}
          />
          {selectedCustomer && (
            <TransactionChart data={data} selectedCustomer={selectedCustomer} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Customers;
