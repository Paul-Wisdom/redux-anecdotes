import { useSelector } from "react-redux"

const Notification = () => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 3
  }

  const notification = useSelector(state => state.notification)

  if(notification === '') return(<div></div>)

  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification