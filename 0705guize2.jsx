let num = 1
function List() {
  num++
  if (num / 2 === 0) {
    const [name, setName] = useState('cp')
  }
  const [list, setList] = useState([])
}
// 俩个hook的顺序不是固定的，这是不可以的！！！
