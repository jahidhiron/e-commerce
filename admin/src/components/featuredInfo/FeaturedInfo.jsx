import "./featuredInfo.css";
import { useEffect, useState } from "react";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { userRequest } from "../../requestMethods";

const FeaturedInfo = () => {
  const [income, setIncome] = useState([]);
  const [perc, setPerc] = useState(0);

  useEffect(() => {
    (async function () {
      try {
        const res = await userRequest.get("/orders/income");
        setIncome(res.data);
        setPerc((res.data[1].total * 100) / res.data[0].total - 100);
      } catch {}
    })();
  }, []);

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">${income[1]?.total}</span>
          <span className="featuredMoneyRate">
            %{Math.floor(perc)}{" "}
            {perc < 0 ? (
              <ArrowDownward className="featuredIcon negetive" />
            ) : (
              <ArrowUpward className="featuredIcon" />
            )}
          </span>
        </div>

        <div className="featuredSub">Compared to last month</div>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$1915</span>
          <span className="featuredMoneyRate">
            -5.9
            <ArrowDownward className="featuredIcon negetive" />
          </span>
        </div>

        <div className="featuredSub">Compared to last month</div>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2213</span>
          <span className="featuredMoneyRate">
            13.15
            <ArrowUpward className="featuredIcon" />
          </span>
        </div>

        <div className="featuredSub">Compared to last month</div>
      </div>
    </div>
  );
};

export default FeaturedInfo;
