export default function Box(props) {
  return <div className="inner-box"
    style={{
      backgroundColor: props.color,
      width: '20px', height: '20px'
    }}
  />
}