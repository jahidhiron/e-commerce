import "./user.css";
import {
  PermIdentity,
  CalendarToday,
  PhoneAndroid,
  MailOutline,
  LocationSearching,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>

        <Link to="/newuser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>

      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              className="userShowImg"
              src="https://www.drupal.org/files/user-pictures/picture-2204516-1469808304.png"
              alt=""
            />
            <div className="userShowTopTitle">
              <div className="userShowUsername">Jon Doe</div>
              <div className="userShowUserTitle">Software Engineer</div>
            </div>
          </div>

          <div className="userShowButtom">
            <span className="userShowButtomTitle">Account Detail</span>
            <div className="userShowBottomInfo">
              <PermIdentity className="userShowBottomInfoIcon" />
              <span className="userShowBottomInfoTitle">jondeo96</span>
            </div>

            <div className="userShowBottomInfo">
              <CalendarToday className="userShowBottomInfoIcon" />
              <span className="userShowBottomInfoTitle">10.12.1999</span>
            </div>

            <span className="userShowButtomTitle">Contact Detail</span>
            <div className="userShowBottomInfo">
              <PhoneAndroid className="userShowBottomInfoIcon" />
              <span className="userShowBottomInfoTitle">+1 123 456 67</span>
            </div>

            <div className="userShowBottomInfo">
              <MailOutline className="userShowBottomInfoIcon" />
              <span className="userShowBottomInfoTitle">
                jondeo96@gmail.com
              </span>
            </div>

            <div className="userShowBottomInfo">
              <LocationSearching className="userShowBottomInfoIcon" />
              <span className="userShowBottomInfoTitle">New York | USA</span>
            </div>
          </div>
        </div>
        <div className="userUpdated">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="annabeck99"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Anna Becker"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="annabeck99@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+1 123 456 67"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="New York | USA"
                  className="userUpdateInput"
                />
              </div>
            </div>

            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  src="https://www.pngitem.com/pimgs/m/528-5286598_all-photo-png-clipart-male-teacher-clipart-png.png"
                  alt=""
                  className="userUpdateImg"
                />
                <label htmlFor="file">
                  <Publish />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
