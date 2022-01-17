import "./topbar.css";
import {
  NotificationsNoneOutlined,
  Language,
  Settings,
} from "@material-ui/icons";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">E-ZONEAdmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNoneOutlined />
            <div className="topIconBadge">2</div>
          </div>

          <div className="topbarIconContainer">
            <Language />
            <div className="topIconBadge">2</div>
          </div>

          <div className="topbarIconContainer">
            <Settings />
          </div>

          <img
            className="topAvatar"
            src="https://img.favpng.com/21/3/18/computer-icons-clip-art-portable-network-graphics-system-administrator-user-png-favpng-P8LVNtfaNewQkVVxgSgqiy0Tk.jpg"
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
