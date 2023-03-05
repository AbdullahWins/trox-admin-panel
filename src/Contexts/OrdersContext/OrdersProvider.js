import React, { createContext, useEffect, useState } from "react";
import { firebaseFirestore } from "../../Firebase/firebase.config";
import { addDoc, collection, getDocs } from "firebase/firestore";

export const OrderContext = createContext();
const OrdersProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [searchBarValue, setSearchBarValue] = useState(null);
  const [filteredOrders, setFilteredOrders] = useState([]);

  const addTodo = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(firebaseFirestore, "todos"), {
        todo: "lol",
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const fetchOrders = async () => {
    await getDocs(collection(firebaseFirestore, "orders")).then(
      (querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setOrders(newData);
        setFilteredOrders(newData);
      }
    );
  };

  const reloadCurrentPage = (setCurrentPage) => {
    setCurrentPage(1);
  };

  const filterOrdersByStatus = (setFilteredByStatus, status) => {
    const filteredOrdersByStatus = [];
    orders?.map((order) => {
      if (order?.order_status === status) {
        filteredOrdersByStatus.push(order);
      }
    });
    setFilteredByStatus(filteredOrdersByStatus);
    console.log(filteredOrdersByStatus);
  };

  // filterOrdersByStatus(orders, "pending");

  const handleSearchItems = (e) => {
    const searchValue = e.target.value;
    if (searchValue === null) {
      setFilteredOrders(orders);
    }
    const filteredOrders = orders?.filter((order) =>
      order?.order_id?.includes(searchValue)
    );
    console.log(filteredOrders);
    setFilteredOrders(filteredOrders);
    setSearchBarValue(searchValue);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const OrderInfo = {
    addTodo,
    fetchOrders,
    orders,
    setOrders,
    filteredOrders,
    setFilteredOrders,
    handleSearchItems,
    reloadCurrentPage,
    searchBarValue,
    filterOrdersByStatus,
    setSearchBarValue,
  };
  return (
    <OrderContext.Provider value={OrderInfo}>{children}</OrderContext.Provider>
  );
};

export default OrdersProvider;
