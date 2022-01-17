import { useEffect } from "react";
import { useState } from "react";
import { userRequest } from "../../requestMethods";
import { format } from "timeago.js";
import "./widgetLg.css";

const WidgetLg = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        const res = await userRequest.get("/orders");
        setOrders(res.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const Button = ({ type }) => {
    return (
      <button type={type} className={"widgetLgButton " + type}>
        {type}
      </button>
    );
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>

      <table className="widgetLgTable">
        <thead>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Order ID</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
        </thead>

        <tbody>
          {orders &&
            orders.map((order) => (
              <tr className="widgetLgTr" key={order._id}>
                <td className="widgetLgUser">
                  <span className="widgetLgName">{order._id}</span>
                </td>

                <td className="widgetLgDate">{format(order.createdAt)}</td>
                <td className="widgetLgAmount">${order.total}</td>
                <td className="widgetLgStatus">
                  <Button type={order.status} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default WidgetLg;
