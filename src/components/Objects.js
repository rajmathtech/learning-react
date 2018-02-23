import React from "react";
import ObjectSingle from "./ObjectSingle";
import { connect } from "react-redux";
import filteredObjects from "../redux/selector/filteredObjects";
import ObjectsFilter from "./ObjectsFilter";
export const Objects = props => (
  <div className="objects-container">
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

const mapStateToProps = ({ objects, filter }) => {
  // console.log(objects);
  // console.log(filter);
  // console.log(filteredObjects(objects, filter));
  // console.log('-----');

  return {
    objects: filteredObjects(objects, filter),
    filter
  };
};
export default connect(mapStateToProps)(Objects);
