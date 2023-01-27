import videoBg from '../assets/videoBg.mp4'

const NetworkMeasurement = () => {
  return (
    <div className='netmeasurement'>
      <video src={videoBg} autoPlay loop muted />
    </div>
  )
}

export default NetworkMeasurement