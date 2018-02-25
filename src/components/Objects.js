import React from "react";
import ObjectSingle from "./ObjectSingle";
import { connect } from "react-redux";
import filteredObjects from "../redux/selector/filteredObjects";
import ObjectsFilter from "./ObjectsFilter";
import AmountSummary from "./AmountSummary";
export const Objects = props => (
  <div className="objects-container">
    <AmountSummary {...props}/>
    <ObjectsFilter />
    {props.objects.length === 0 ? (
      <p> no object found! </p>
    ) : (
      props.objects.map(object => (
        <ObjectSingle key={object.id} object={object} />
      ))
    )}
  </div>
);

const mapStateToProps = ({ objects, filter }) => ({
    objects: filteredObjects(objects, filter),
    filter
  });

export default connect(mapStateToProps)(Objects);
