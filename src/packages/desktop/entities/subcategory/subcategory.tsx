import "./subcategory.css"
import { Link } from "react-router-dom"
export function Subactegory(props: any) {
  return (
    <div className="subcategory">
      <Link to={`/categorypage/${props.id}`}>{props.subcategory}</Link>
    </div>
  )
}
