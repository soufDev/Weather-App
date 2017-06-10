import { StackNavigator } from 'react-navigation'
import Search from './Search'
export default StackNavigator({
  Search: {
    screen: Search
  },
  Result: {
    screen: Search
  }
})