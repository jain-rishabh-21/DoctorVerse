import {Oval} from 'react-loader-spinner'
import './loading.css'

const Loading = () => {
  return (
    <div className='loader'>
        <Oval
            ariaLabel="loading-indicator"
            height={50}
            width={50}
            strokeWidth={5}
            color="#0096FF"
            secondaryColor="#89CFF0"
        />
  </div>
  )
}

export default Loading