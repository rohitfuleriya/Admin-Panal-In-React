import "./widgetSm.css"
import { MdVisibility } from 'react-icons/md'
import img from "../../components/Assets/widget.jpg";


export default function WidgetSm() {
  return (
    <div className="widgetSm"> 
      <span className="widgetTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
            <li className="widgetSmListItem">
                <img src={img} alt="" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Anna Keller</span>
                    <span className="widgetSmUsernameTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <MdVisibility className="widgetSmIcon"/>
                    Display
                </button>
            </li>
        </li>

        <li className="widgetSmListItem">
            <li className="widgetSmListItem">
                <img src={img} alt="" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Anna Keller</span>
                    <span className="widgetSmUsernameTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <MdVisibility className="widgetSmIcon"/>
                    Display
                </button>
            </li>
        </li>

        <li className="widgetSmListItem">
            <li className="widgetSmListItem">
                <img src={img} alt="" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Anna Keller</span>
                    <span className="widgetSmUsernameTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <MdVisibility className="widgetSmIcon"/>
                    Display
                </button>
            </li>
        </li>

        <li className="widgetSmListItem">
            <li className="widgetSmListItem">
                <img src={img} alt="" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Anna Keller</span>
                    <span className="widgetSmUsernameTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <MdVisibility className="widgetSmIcon"/>
                    Display
                </button>
            </li>
        </li>

        <li className="widgetSmListItem">
            <li className="widgetSmListItem">
                <img src={img} alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Anna Keller</span>
                    <span className="widgetSmUsernameTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <MdVisibility className="widgetSmIcon"/>
                    Display
                </button>
            </li>
        </li>
      </ul>
    </div>
  )
}
