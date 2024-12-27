import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { NextPage } from "next";

const Community: NextPage = () => {
  return (
    <div>
      COMMUNITY
      <button onClick={() => alert("HELLOW MIT")} style={{ margin: "15px" }}>
        Press ME
      </button>
    </div>
  );
};
export default withLayoutBasic(Community);
