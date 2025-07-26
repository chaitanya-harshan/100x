import { Auth } from '../components/Auth'
import { Quote } from '../components/Quote'

export const SignIn = () => {
  return (
    <div className='grid grid-cols-2'>
        <div>
          <Auth type='signin'/>
        </div>
        <div className='invisble md:visible'>
          <Quote/>
        </div>
    </div>
  )
}
