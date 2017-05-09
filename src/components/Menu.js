import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink, Link, Switch } from 'react-router-dom'
import { query } from '../api'

class Menu extends Component {
  state = {
    categories: []
  }

  componentDidMount () {
    query(`allCategories {
    name
    slug
  }`).then(({ data }) => {
    this.setState({
      categories: data.allCategories
    })
  })
  }

  render () {
    return <div className='Menu'>
      <div className='menuBox'>
        <h2 className='bodyh1'>Our Menu</h2>

        <section className='menuLinks'>
          <ul>
            {this.state.categories.map(({ slug, name }, i) => (
              <li key={i}>
                <NavLink to={`/menu/${slug}`}>{name}</NavLink>
              </li>
          ))}
          </ul>
          <Switch>
            <Route path='/menu' exact>
              <h2>This is our delicious menu.</h2>
            </Route>
            <Route path='/menu/:slug' component={MenuSection} />
          </Switch>
        </section>
      </div>
    </div>
  }
}

class MenuSection extends React.Component {
  state = {
    name: 'Loading...',
    items: []
  }

  componentDidMount () {
    this.load(this.props.match.params.slug)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.match.params.slug !== this.props.match.params.slug) {
      this.setState({ name: 'Loading...', items: [] })
      this.load(nextProps.match.params.slug)
    }
  }

  load (slug) {
    query(`allCategories(filter: { slug: "${slug}" }, first: 1) {
      name
      slug
      items {
        name
        price
        description
      }
    }`).then(({ data }) => {
      const { name, items } = data.allCategories[0]
      this.setState({ name, items })
    })
  }

  render () {
    return <section>
      <h3 className='spanTitle'>{this.state.name}</h3>
      <table>
        <tbody>
          {this.state.items.map((item, i) =>
            <tr key={i}>
              <div className='singleItem'>
                <th>{item.name}</th>
                <td>{item.description}</td>
                <td>${item.price / 100}</td>
              </div>
            </tr>
        )}
        </tbody>
      </table>
    </section>
  }
}

export default Menu

// <Router>
//   <div className='Menu'>
//     <div className='menuBox'>
//       <h1 className='bodyh1'> Menu </h1>
//       <div className='menuLinks'>
//         <Link exact to='/menu/bites'> Bites </Link>
//         <Link to='/menu/burgers'> Burgers </Link>
//       </div>
//       <div className='menuItems'>
//         <Route exact path='/menu/' component={Bites} />
//         <Switch>
//           <Route exact path='/menu/bites' component={Bites} />
//           <Route exact path='/menu/burgers' component={Burgers} />
//         </Switch>
//       </div>
//     </div>
//   </div>
// </Router>
