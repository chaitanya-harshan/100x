import { Link } from "react-router-dom"

const BottomWarning = ({text, linkText, to}) => {
return (
    <div className="flex pb-2 text-sm justify-center">
        <div className="pr-2">
            {text}
        </div>
        <Link to={to} className="cursor-pointer underline text-black">
            {linkText}
        </Link>
    </div>
)
}

export default BottomWarning