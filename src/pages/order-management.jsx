import React, { useState, useMemo, useEffect } from "react";

import DashboardIcon from "../icons/dashboard.svg?component";
import DesignIcon from "../icons/design.svg?component";
import OrderIcon from "../icons/order.svg?component";
import InventoryIcon from "../icons/inventory.svg?component";
import TruckIcon from "../icons/truck.svg?component";
import ContactIcon from "../icons/contact.svg?component";
import ProfileIcon from "../icons/profile.svg?component";
import BillingIcon from "../icons/billing.svg?component";
import HelpIcon from "../icons/help.svg?component";
import LogoutIcon from "../icons/logout.svg?component";
import ChevronLeftIcon from "../icons/chevron-left.svg?component";
import ArrowLeftIcon from "../icons/arrow-left.svg?component";
import BoxIcon from "../icons/box.svg?component";
import TShirtIcon from "../icons/t-shirt.svg?component";
import ChevronRightIcon from "../icons/chevron-right.svg?component";
import InfoIcon from "../icons/info.svg?component";
import { useAxios } from "../hooks/axios";

const menu = [
  [
    { name: "Dashboard", icon: DashboardIcon },
    { name: "Design", icon: DesignIcon },
    { name: "Orders", icon: OrderIcon },
    { name: "Inventory", icon: InventoryIcon },
    { name: "Shipments", icon: TruckIcon },
    { name: "Contacts", icon: ContactIcon },
  ],
  [
    { name: "Profile", icon: ProfileIcon },
    { name: "Billing", icon: BillingIcon },
    { name: "Help", icon: HelpIcon },
    { name: "Logout", icon: LogoutIcon },
  ],
];

const formatMoney = (value) =>
  new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
  }).format(value);

const OrderManagement = () => {
  const [orders, setOrders] = useState([]);
  const [shipping, setShipping] = useState({});
  const [storage, setStorage] = useState({});
  const [products, setProducts] = useState([]);
  const { axios } = useAxios();

  const totalOrder = useMemo(
    () => orders.reduce((total, order) => total + order.subtotal, 0),
    [orders]
  );

  const getProducts = async () => {
    const { data } = await axios.get(`/api/products`);
    console.log(data)

    if (data.data)
    setProducts(data?.data || []);
  };

  const getOrders = async () => {
    const { data } = await axios.get(`/api/orders`);

    if (data.data) setOrders(data.data);
  };

  const getShippingAndStorage = async () => {
    const { data } = await axios.get(`/api/shipping-and-storage`);

    if (data && data.shipping) setShipping(data.shipping)
    if (data && data.storage) setStorage(data.storage)
  };

  useEffect(() => {
    console.log('jsjs n jd')
    getProducts();
    getOrders();
    getShippingAndStorage();
  }, []);

  return (
    <div className="flex h-screen w-full bg-white font-sans text-gray-900">
      <aside className="relative flex w-52 flex-col border-r border-gray-200 py-4 px-6">
        <button className="absolute -right-2.5 top-5 flex items-center justify-center rounded-full border border-gray-200 bg-gray-100">
          <ChevronLeftIcon className="h-4 w-4 text-gray-400" />
        </button>
        <a href="#">
          <img src="/img/logo.png" alt="" className="w-24" />
        </a>

        {menu.map((group, i) => (
          <ul
            className={`flex flex-col gap-y-5 pt-12 ${i === 0 ? "flex" : ""}`}
            key={i}
          >
            {group.map((item, index) => (
              <li key={index}>
                <a href="#" className="group flex items-center gap-x-3">
                  <item.icon className="h-5 w-5 fill-current text-gray-400 group-hover:text-blue-500" />
                  <span className="inline-block text-sm leading-6 text-gray-600 group-hover:font-semibold group-hover:text-gray-800">
                    {item.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        ))}
      </aside>

      <main className="flex-1 overflow-y-scroll">
        <div className="flex flex-1 flex-col py-4 px-10">
          <button className="flex items-center gap-x-1 text-gray-400">
            <ArrowLeftIcon className="h-4 w-4 fill-current" />
            <span className="inline-block pt-0.5 text-sm leading-6">
              Back to Order
            </span>
          </button>

          <section className="pt-6">
            <h1 className="text-2xl font-bold text-gray-900">Products</h1>
            <div className="grid grid-cols-3 gap-x-6 py-6">
              {products.map((product, i) => (
                <article
                  key={i}
                  className="overflow-hidden rounded-2xl border border-gray-100"
                >
                  <div className="flex aspect-square items-center justify-center bg-gray-100">
                    <img src={product.imageUrl} alt="" />
                  </div>
                  <div className="flex flex-col p-6">
                    <div className="flex items-center justify-between">
                      <h2 className="font-semibold tracking-wide">
                        {product.name}
                      </h2>
                      <span className="flex items-center gap-x-1">
                        <BoxIcon
                          v-if="product.category === 'Pack'"
                          className="h-4 w-4 fill-current text-gray-400"
                        />
                        <TShirtIcon
                          v-else
                          className="h-4 w-4 fill-current text-gray-400"
                        />
                        <span className="text-sm font-semibold tracking-wide text-gray-800">
                          {product.category}
                        </span>
                      </span>
                    </div>
                    <span className="text-sm text-gray-400">
                      Color :{" "}
                      <span className="text-gray-600">{product.color}</span>
                    </span>
                    <a
                      href="#"
                      className="mt-6 inline-block text-center text-sm font-semibold text-blue-500 hover:text-blue-600"
                    >
                      View Mockups
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="py-5">
            <h1 className="text-2xl font-bold text-gray-900">
              Shipping & Storage
            </h1>
            <div className="grid grid-cols-2 gap-x-6 pt-6">
              <div className="relative overflow-hidden rounded-2xl border border-gray-100 p-6">
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <h3 className="font-semibold">Ship Swag to Recipients</h3>
                  <a
                    href="#"
                    className="flex items-center text-sm font-semibold text-blue-500 hover:text-blue-600"
                  >
                    <span>View Shipments</span>
                    <ChevronRightIcon className="h-4 w-4 fill-current" />
                  </a>
                </div>
                <div className="grid grid-cols-2 gap-x-4 pt-4">
                  <div>
                    <div className="text-sm text-gray-600">
                      Shipments Created
                    </div>
                    <div className="pt-2 text-lg font-semibold">
                      {shipping.total}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Total Shipment</div>
                    <div className="pt-2 text-lg font-semibold">
                      {formatMoney(shipping.amount)}
                    </div>
                  </div>
                </div>
                <button className="mt-4 rounded-full border border-blue-500 py-2 px-5 text-sm font-semibold leading-relaxed text-blue-500 hover:border-blue-500 hover:bg-blue-500 hover:text-white">
                  Create Shipment
                </button>
                <img
                  src="/img/shipment.png"
                  alt=""
                  className="absolute right-0 bottom-0 w-28"
                />
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-gray-100 p-6">
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <h3 className="font-semibold">Send Swag to Storage</h3>
                  <a
                    href="#"
                    className="flex items-center text-sm font-semibold text-blue-500 hover:text-blue-600"
                  >
                    <span>View SwagUp Storage</span>
                    <ChevronRightIcon className="h-4 w-4 fill-current" />
                  </a>
                </div>
                <div className="grid grid-cols-2 gap-x-4 pt-4">
                  <div>
                    <div className="text-sm text-gray-600">
                      Sending to Storage
                    </div>
                    <div className="pt-2 text-lg font-semibold">
                      {storage.total}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Total Storage</div>
                    <div className="pt-2 text-lg font-semibold">
                      {formatMoney(storage.amount)}
                    </div>
                  </div>
                </div>
                <button className="mt-4 rounded-full border border-blue-500 py-2 px-5 text-sm font-semibold leading-relaxed text-blue-500 hover:border-blue-500 hover:bg-blue-500 hover:text-white">
                  Create Shipment
                </button>
                <img
                  src="/img/storage.png"
                  alt=""
                  className="absolute right-0 bottom-0 w-28"
                />
              </div>
            </div>
          </section>
        </div>
      </main>

      <aside className="flex w-72 flex-col border-l border-gray-200">
        <div className="border-b border-gray-200 py-4 px-6">
          <div className="font-semibold leading-relaxed text-gray-800">
            Order #22353 Summary
          </div>
          <div className="text-xs leading-loose text-gray-400">
            Order Placed: 12-30-2020
          </div>
        </div>
        <ul className="flex-1 overflow-y-scroll px-6">
          {orders.map((order, index) => (
            <li
              key={index}
              className="border-b border-gray-200 py-2 last:border-none"
            >
              <div className="mt-2 text-sm font-semibold text-gray-800">
                {order.productName}
              </div>
              <div className="mt-1 flex items-center justify-between text-xs text-gray-400">
                <span>
                  {" "}
                  {formatMoney(order.price)} x {order.quantity}{" "}
                </span>
                <span className="font-bold text-gray-800">
                  {formatMoney(order.subtotal)}
                </span>
              </div>
              <a
                href="#"
                className="mt-3 inline-block text-xs font-semibold leading-relaxed text-blue-500 hover:text-blue-600"
              >
                Edit breakdown
              </a>
            </li>
          ))}
        </ul>
        <div className="border-t border-gray-200 px-6 pb-4">
          <div className="py-2">
            <div className="flex items-center justify-between py-1">
              <div className="text-xs text-gray-400">Subtotal</div>
              <span className="font-semibold"> {formatMoney(totalOrder)} </span>
            </div>
            <div className="flex items-center justify-between py-1">
              <span className="flex items-center gap-x-1">
                <div className="text-xs text-gray-400">Shipping</div>
                <InfoIcon className="h-4 w-4 stroke-current text-gray-300" />
              </span>
              <span className="text-sm text-gray-300"> TBD </span>
            </div>
            <div className="flex items-center justify-between py-1">
              <span className="flex items-center gap-x-1">
                <div className="text-xs text-gray-400">Warehouse</div>
                <InfoIcon className="h-4 w-4 stroke-current text-gray-300" />
              </span>
              <span className="text-sm text-gray-300"> TBD </span>
            </div>
          </div>
          <div className="flex items-center justify-between border-t border-gray-200 py-4">
            <div className="text-sm text-gray-400">Total</div>
            <div className="text-lg font-semibold">
              {formatMoney(totalOrder)}
            </div>
          </div>
          <button className="flex w-full items-center justify-center rounded-full bg-blue-500 py-4 text-sm font-semibold text-white hover:bg-blue-600">
            Continue
          </button>
        </div>
      </aside>
    </div>
  );
};

export default OrderManagement;
