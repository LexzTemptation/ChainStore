import { useState } from "react"
import useGetAccessories from "../../Hooks/useGetAccessories"
import ItemAccessories from "./ItemAccessories"
import DetailesAccessories from "../AccessoriesComponents/DetailesAccessories"

function Accessories({dataUser}) {

    const [accion, setAccion] = useState("products")
    const [dataDatail, setDataDetail] = useState()

    const { accessories } = useGetAccessories()

    return (
        <div>
            {
                accion === "products"
                    ? accessories ? accessories.map(accessory => <ItemAccessories data={accessory} setAccion={setAccion} setDataDetail={setDataDetail} />) : null
                    : <DetailesAccessories setAccion={setAccion} dataDatail={dataDatail} dataUser={dataUser}/>
            }
        </div>
    )
}

export default Accessories

