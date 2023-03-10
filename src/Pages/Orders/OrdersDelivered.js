import React, { useState } from "react";
import orders from "../../Assets/json/orders.json";
import ConfirmationModal from "../../Components/Modals/ConfirmationModal";

const OrdersDelivered = () => {
  const [selectedOrders, setSelectedOrders] = useState([]);
  const ordersProcessing = orders;

  const handleCheckbox = (event) => {
    const selectedOrdersList = [...selectedOrders];
    if (event.target.checked) {
      selectedOrdersList.push(event.target.value);
    } else {
      const index = selectedOrdersList.indexOf(event.target.value);
      if (index > -1) {
        selectedOrdersList.splice(index, 1);
      }
    }
    setSelectedOrders(selectedOrdersList);
  };

  return (
    <div className="overflow-x-auto w-full py-10 pr-10">
      <div className="flex items-center justify-between p-4 bg-secondaryMain text-whiteHigh rounded-t-lg">
        <section className="flex items-center gap-4">
          <div>
            <p className="font-bold text-2xl">Orders</p>
          </div>
          <div>
            <div className="dropdown dropdown-hover">
              <label tabIndex={0} className="btn btn-ghost btn-sm m-1">
                Customer User &nbsp; <i className="fa-solid fa-angle-down"></i>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 text-blackMid rounded-box w-52"
              >
                <li>
                  <button>Customer User</button>
                </li>
                <li>
                  <button>Marchants</button>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="dropdown dropdown-hover">
              <label tabIndex={0} className="btn btn-ghost btn-sm m-1">
                All Types &nbsp; <i className="fa-solid fa-angle-down"></i>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 text-blackMid rounded-box w-52"
              >
                <li>
                  <button>Local</button>
                </li>
                <li>
                  <button>Local Distance</button>
                </li>
                <li>
                  <button>International</button>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="flex items-center gap-4 w-2/5">
          <input
            className="p-3 w-full text-blackMid rounded-md border-none active:border-none"
            type="text"
            placeholder="&#x1F50D; Search"
          />
          <p>
            <button className="btn bg-whiteHigh hover:bg-whiteLow border-none rounded-full">
              <svg
                width="16"
                height="18"
                viewBox="0 0 16 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.6415 3.35146C12.0115 1.72146 9.70148 0.781457 7.16148 1.04146C3.49148 1.41146 0.471476 4.39146 0.0614764 8.06146C-0.488524 12.9115 3.26148 17.0015 7.99148 17.0015C11.1815 17.0015 13.9215 15.1315 15.2015 12.4415C15.5215 11.7715 15.0415 11.0015 14.3015 11.0015C13.9315 11.0015 13.5815 11.2015 13.4215 11.5315C12.2915 13.9615 9.58148 15.5015 6.62148 14.8415C4.40148 14.3515 2.61148 12.5415 2.14148 10.3215C1.30148 6.44146 4.25148 3.00146 7.99148 3.00146C9.65148 3.00146 11.1315 3.69146 12.2115 4.78146L10.7015 6.29146C10.0715 6.92146 10.5115 8.00146 11.4015 8.00146H14.9915C15.5415 8.00146 15.9915 7.55146 15.9915 7.00146V3.41146C15.9915 2.52146 14.9115 2.07146 14.2815 2.70146L13.6415 3.35146Z"
                  fill="#37B6B6"
                />
              </svg>
            </button>
          </p>
        </section>
      </div>
      <div
        className={` ${
          selectedOrders.length < 1
            ? "hidden"
            : "flex items-center justify-start gap-4"
        } p-4 bg-whiteHigh`}
      >
        <button className="btn btn-sm border-none text-blackMid hover:text-whiteHigh bg-whiteLow">
          Select All
        </button>
        <label
          htmlFor="deletePopup"
          className="btn btn-sm border-none bg-primaryMain"
        >
          Delete
        </label>
      </div>
      <table className="table w-full">
        <thead>
          <tr className="font-bold text-center text-3xl">
            <th className="bg-secondaryMainLightest text-bold text-lg">
              Serial
            </th>
            <th className="bg-secondaryMainLightest text-bold text-lg">
              Order ID
            </th>
            <th className="bg-secondaryMainLightest text-bold text-lg">
              Created
            </th>
            <th className="bg-secondaryMainLightest text-bold text-lg">
              Customer
            </th>
            <th className="bg-secondaryMainLightest text-bold text-lg">
              Total
            </th>
            <th className="bg-secondaryMainLightest text-bold text-lg">
              Pickup Address
            </th>
            <th className="bg-secondaryMainLightest text-bold text-lg">
              Destination Address
            </th>
            <th className="bg-secondaryMainLightest text-bold text-lg">
              Actions
            </th>
          </tr>
        </thead>
        {ordersProcessing.map((order, i) => {
          return (
            <tbody key={i}>
              <tr className="text-center">
                <th className="px-0">
                  <p className="flex items-center justify-center">
                    <input
                      type="checkbox"
                      className="checkbox"
                      value={order.orderId}
                      onChange={handleCheckbox}
                    />
                    &nbsp; &nbsp;
                    {order.serial}
                  </p>
                </th>
                <td className="px-0">{order.orderId}</td>
                <td className="px-0">{order.created}</td>
                <td className="px-0">{order.customer}</td>
                <td className="px-0">${order.totalAmount}.00</td>
                <td className="px-0">{order.pickupAddress}</td>
                <td className="px-0">{order.destinationAddress}</td>
                <td className="px-0">
                  <span className="text-whiteHigh text-center py-2 px-6 rounded-full bg-successColor">
                    Delivered
                  </span>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
      {/* delete modal popup */}
      <ConfirmationModal actionName="delete"></ConfirmationModal>
    </div>
  );
};

export default OrdersDelivered;
