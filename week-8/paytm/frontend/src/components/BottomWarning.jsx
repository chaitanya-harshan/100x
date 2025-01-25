import { Link } from "react-router-dom"

const BottomWarning = ({text, linkText, to}) => {
return (
    <div className="flex pb-2 text-sm justify-center">
        <div className="pr-2">
            {text}
        </div>
        <Link to={to} className="underline text-black cursor-pointer">
            {linkText}
        </Link>
    </div>
)
}

export default BottomWarning