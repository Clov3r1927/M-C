import Card from '../Molecules/Card';
import { useParams } from 'react-router-dom';
 export const Muebles = () => {
    const info = {
        url:"https://quartto.com.mx/cdn/shop/products/MUEBLEDET_2048x2048.jpg?v=1591459260"
     }
  const { id } = useParams();
  return (
      <div className="w-full  py-2 flex flex-wrap gap-y-6 justify-center gap-x-[6rem]">
      <Card informacion={info}/>
      <Card informacion={info}/>
      <Card informacion={info}/>
      <Card informacion={info}/>

    </div>
  )
}
