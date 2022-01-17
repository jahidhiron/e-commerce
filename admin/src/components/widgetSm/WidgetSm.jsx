import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useState } from "react";
import { useEffect } from "react";
import { userRequest } from "../../requestMethods";

const WidgetSm = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        const res = await userRequest.get("/users?new=true");
        setUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Join New Members</span>
      <ul className="widgetSmList">
        {users &&
          users.map((user) => (
            <li className="widgetSmListItem" key={user._id}>
              <img
                src={
                  user.img ||
                  "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
                }
                alt="profile"
                className="widgetSmImg"
              />

              <div className="widgetSmUser">
                <span className="widgetSmUserName">{user.username}</span>
              </div>

              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon" />
                Display
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default WidgetSm;
