import React from "react";

import { NoDataViewContainer, NoDataViewText } from "./styledComponents";

class NoDataView extends React.Component {

  static defaultProps = {
    text: "No Data View"
  };

  render() {
    const { text } = this.props;
    return (
      <NoDataViewContainer {...this.props}>
        <NoDataViewText>{text}</NoDataViewText>
      </NoDataViewContainer>
    );
  }
}

export default NoDataView;
