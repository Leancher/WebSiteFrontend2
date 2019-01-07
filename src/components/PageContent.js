import React from 'react';
import { CategoryTileGrid } from './CategoryTileGrid';
import { PhotoGrid } from './PhotoGrid';
import {
  buildLink,
  getCategoryNumber,
  getCurrentCategory,
  getSubCatNumber
} from './utilites';

class PageContent extends React.Component {
  constructor(props) {
    super(props);
    this.numCat = 0;
    this.numSubCat = 0;
    this.caption = '';
  }
  state = {
    curCategory: []
  };

  renderMenuList() {
    return (
      <div className="MainMenuLocate">
        <div className="MenuList">
          {this.props.category.map((element, index) => (
            <a href={buildLink(index, '')} key={index}>
              {element[1]}
            </a>
          ))}
        </div>
      </div>
    );
  }

  selectRenderContent() {
    const nameCat = this.props.category[this.numCat][0];
    if (this.numSubCat === 0) {
      return (
        <CategoryTileGrid
          category={this.state.curCategory}
          nameCat={nameCat}
          numberCat={this.numCat}
        />
      );
    }
    //isPhotoAlbum
    if (this.state.curCategory[this.numSubCat][1] === '1') {
      return (
        <PhotoGrid numberCat={this.numCat} numSubCat={this.numSubCat} nameCat={nameCat} />
      );
    }
  }

  renderPageContent() {
    return (
      <React.Fragment>
        {this.renderMenuList()}
        <div className="ContentBlock">
          <div className="ContentCaption">{this.props.category[this.numCat][1]}</div>
          <div id="CategoryBlock">{this.selectRenderContent()}</div>
          <div className="ContentColumn">
            <div id="ArticleBlock">ArticleBlock</div>
          </div>
          <div id="PhotoBlock">PhotoBlock</div>
          <p id="ErrorMessage">Error</p>
        </div>
      </React.Fragment>
    );
  }

  setCurrentCategory = curCategory => {
    this.setState({ curCategory: curCategory });
    return this.renderPageContent();
  };

  render() {
    this.numCat = getCategoryNumber();
    this.numSubCat = getSubCatNumber();
    return (
      <React.Fragment>
        {this.state.curCategory.length === 0
          ? getCurrentCategory(this.setCurrentCategory, this.numCat)
          : this.renderPageContent()}
      </React.Fragment>
    );
  }
}

export { PageContent };
