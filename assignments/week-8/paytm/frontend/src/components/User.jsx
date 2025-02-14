import { useNavigate } from "react-router-dom"

const User = ({user}) => {
    const userIconLetter = user.firstName[0].toUpperCase()
    const fullName = user.firstName + " " + user.lastName
    const random = Math.floor(Math.random() * 6)
    const colors = ["bg-amber-600", "bg-sky-600", "bg-green-600", "bg-purple-600", "bg-slate-600", "bg-stone-500"]
    
    const navigate = useNavigate()

    function navigateToSendMoney(e) {
        navigate("/send?id="+user._id+"&name="+fullName)
    }
    
    return (
        <div className="flex justify-between border-2 border-gray-200 rounded-xl shadow-md px-6 mt-3">
        <div className="flex items-center w-max">
            <div className={`h-10 w-10 rounded-full flex justify-center items-center ${colors[random]}`}>
                <div className="text-2xl font-medium">
                    {userIconLetter}
                </div>
            </div>
            <div className="text-xl pl-6">
                {fullName}
            </div>
        </div>
        <div className="w-max">
            <button className="cursor-pointer w-full rounded-full bg-black text-white font-semibold hover:bg-gray-900 focus:outline-none py-2 px-4 my-4 focus:ring-4 focus:ring-gray-400"
            onClick={navigateToSendMoney}
            >
            Send Money
            </button>
        </div>
    </div>
  )
}

export default User




