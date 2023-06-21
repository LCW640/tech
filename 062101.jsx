import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  // 在这里可以进行打印测试
  console.log(count)
  return (
    <button
      onClick={() => {
        setCount(count + 1)
      }}>
      {count}
    </button>
  )
}
export default App
