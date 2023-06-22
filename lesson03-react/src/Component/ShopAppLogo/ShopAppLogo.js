import './Style.css'
import img from "./img/Vector.png"
function ShopAppLogo(){
    return(
        <div className="ShopAppLogo">
            <h1>Shop App</h1>
            <div className="ShopAppLogo_img">
                <img src={img} />
            </div>
        </div>
    )
}
export default ShopAppLogo;