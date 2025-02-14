import { RevenueCad } from "./components/RevenueCad"

const App = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <RevenueCad title={"Amount Pending"} amount={"92,312.20"} orderCount={13}/>
    </div>
  )
}

export default App