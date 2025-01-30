import React from "react";
import { Component as ComponentType } from "../../data/componentsData";

interface ComponentListProps {
  components: ComponentType[];
}

const ComponentList: React.FC<ComponentListProps> = ({ components }) => {
  return (
    <div>
      <h5>Components</h5>
      {components.length > 0 ? (
        <div className="row">
          {components.map((component) => (
            <div key={component.Name} className="col-md-3 mb-3">
              <div style={{border: "solid 1px grey", margin:"1px", borderRadius:"30px" }}>
                {component.Name}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-muted mt-3">No components found.</p>
      )}
    </div>
  );
};

export default ComponentList;