import "./widgetLg.css"
import img from "../../components/Assets/widget.jpg";

export default function WidgetLg() {
    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>;
    }
  return (
    <div className="widgetLg"> 
      <span className="widgetLgTitle">Latest transactions</span>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
            <td className="widgetLgUser">
                <img src={img} alt="" className="widgetLgImg" />
                <span className="widgetLgName">Rohit Fuleriya</span>
            </td>
            <td className="widgetLgName">2 Jun 2023</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus"><Button type='Approved' /></td>
            
        </tr>

        <tr className="widgetLgTr">
            <td className="widgetLgUser">
                <img src={img} alt="" className="widgetLgImg" />
                <span className="widgetLgName">Rohit Fuleriya</span>
            </td>
            <td className="widgetLgName">2 Jun 2023</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus"><Button type='Declined' /></td>
            
        </tr>

        <tr className="widgetLgTr">
            <td className="widgetLgUser">
                <img src={img} alt="" className="widgetLgImg" />
                <span className="widgetLgName">Rohit Fuleriya</span>
            </td>
            <td className="widgetLgName">2 Jun 2023</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus"><Button type='Pending'/></td>
            
        </tr>

        <tr className="widgetLgTr">
            <td className="widgetLgUser">
                <img src={img} alt="" className="widgetLgImg" />
                <span className="widgetLgName">Rohit Fuleriya</span>
            </td>
            <td className="widgetLgName">2 Jun 2023</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus"><Button type='Approved' /></td>
            
        </tr>

        <tr className="widgetLgTr">
            <td className="widgetLgUser">
                <img src={img} alt="" className="widgetLgImg" />
                <span className="widgetLgName">Rohit Fuleriya</span>
            </td>
            <td className="widgetLgName">2 Jun 2023</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus"><Button type='Pending' /></td>
            
        </tr>

        <tr className="widgetLgTr">
            <td className="widgetLgUser">
                <img src={img} alt="" className="widgetLgImg" />
                <span className="widgetLgName">Rohit Fuleriya</span>
            </td>
            <td className="widgetLgName">2 Jun 2023</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus"><Button type='Approved' /></td>
            
        </tr>

        <tr className="widgetLgTr">
            <td className="widgetLgUser">
                <img src={img} alt="" className="widgetLgImg" />
                <span className="widgetLgName">Rohit Fuleriya</span>
            </td>
            <td className="widgetLgName">2 Jun 2023</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus"><Button type='Pending' /></td>
            
        </tr>

        <tr className="widgetLgTr">
            <td className="widgetLgUser">
                <img src={img} alt="" className="widgetLgImg" />
                <span className="widgetLgName">Rohit Fuleriya</span>
            </td>
            <td className="widgetLgName">2 Jun 2023</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus"><Button type='Declined' /></td>
            
        </tr>
      </table>
    </div>
  )
}