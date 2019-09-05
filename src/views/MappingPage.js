import React, { Component } from "react";
import Header from "../components/Header/Header";
import MetricAppBar from "../components/Metrics/MetricAppBar";
import LeafletMap from "../components/Map/LeafletMap";
import LeafletMapLegend from "../components/Map/LeafletMapLegend";

class MappingPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <MetricAppBar />
        <LeafletMap />
        <LeafletMapLegend />
      </div>
    );
  }
}
export default MappingPage;
