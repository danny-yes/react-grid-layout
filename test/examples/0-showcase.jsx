import React from "react";
import GridLayout from "react-grid-layout";

export default class ShowcaseLayout extends React.Component {
  static defaultProps = {
    className: "layout",
    rowHeight: 30,
    onLayoutChange: function() {},
    cols: 64,
    maxRows: 64,
    margin: [0, 0],
    autoSize: false,
    fixedNxN: true,
    preventCollision: true,
    compactType: null
  };

  state = {
    mounted: false,
    layout: generateLayout()
  };

  componentDidMount() {
    this.setState({ mounted: true });
  }

  onDrop = elemParams => {
    alert(`Element parameters: ${JSON.stringify(elemParams)}`);
  };

  render() {
    return (
      <div
        className="nxn-grid-container"
        style={{ position: "absolute", height: "100%", width: "100%" }}
      >
        <GridLayout
          {...this.props}
          onLayoutChange={this.onLayoutChange}
          onDrop={this.onDrop}
        >
          {this.state.layout.map(item => {
            return (
              <div
                key={item.i}
                id={item.i}
				data-grid={item}
				style={{'textAlign': 'center'}}
              >
                <h1>{item.i}</h1>
              </div>
            );
          })}
        </GridLayout>
      </div>
    );
  }
}

function generateLayout() {
  return [
    { i: "a", x: 0, y: 0, w: 8, h: 8 },
    { i: "b", x: 8, y: 0, w: 8, h: 8 },
    { i: "c", x: 16, y: 0, w: 8, h: 8 }
  ];
}

if (process.env.STATIC_EXAMPLES === true) {
  import("../test-hook.jsx").then(fn => fn.default(ShowcaseLayout));
}
