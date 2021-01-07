import React, { Component } from "react";
import axios from "axios";

class CategoryList extends Component {
  constructor() {
    super();
      this.state = {
      categories: [],
      selectedCategory: ""
    }
  }

  componentDidMount = () => {
    this.getCategoryList();
  };

  getCategoryList = () => {
    axios.get('api/categories')
    .then((res) => {
      this.setState({
        categories: res.data
      })
    }).catch(err=> console.log(err))
  };

  changeCategory = (category) => {
    if (this.state.selectedCategory === category.category_name)
      this.setState({
        selectedCategory: "",
      });
    else
      this.setState({
        selectedCategory: category.category_name,
      });
    this.props.getAllProducts(category.category_id);
  };

  render() {
    let {categories, selectedCategory} = this.state;
    return (
      <div className="Category-List">
        <ul>
          <li>
            {/* {categories.map((category) => (                                          
              <Category
                key={category.category_id}
                name ={category.category_name}
                category={category}
                onClick={() => this.changeCategory(category)}
                // hover
                // active={
                //   category === this.state.selectedCategory ? true : false
                // }
                // action
                // onClick={() => this.state.changeCategory(category)} />
              />
            ))} */}
          </li>
        </ul>
      </div>
    );
  }
}

export default CategoryList;
