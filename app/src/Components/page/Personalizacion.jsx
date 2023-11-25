import imagen from "../../../resources/images/Personalizity.png"
import Inputs from "../Molecules/Inputs"

export default function Personalizacion() {
  return (
    <div className="flex items-center justify-center w-full px-4 pt-8 gap-x-1 ">
        <img src={imagen} alt="" className="w-[30rem] h-[28rem] slide-in-left" />
        <Inputs className/>
    </div>
  )
}
