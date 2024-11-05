import React, { memo } from "react";
import { Cluster } from "react-native-maps";

const ClusterHarmony = ({ marker, distance, onPress }) => {
  return (
    <Cluster
      clusterItems={marker.clusterChildItem}
      distance={distance ? distance : 40}
      onPress={onPress}
      style={{ zIndex: marker.properties.point_count + 1 }}
    ></Cluster>
  );
};

export default memo(ClusterHarmony);
