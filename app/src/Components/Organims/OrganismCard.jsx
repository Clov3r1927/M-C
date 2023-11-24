import Card from "../Molecules/Card";
  const info = {
     url:"https://quartto.com.mx/cdn/shop/products/MUEBLEDET_2048x2048.jpg?v=1591459260"
  }

export default function OrganismCard() {
  return (
    <div className="w-full px-4 py-2 flex flex-wrap gap-y-6 justify-center gap-x-[6rem]">
      <Card informacion={info}/>
      <Card informacion={info}/>
      <Card informacion={info}/>
      <Card informacion={info}/>
    </div>
  )
}
