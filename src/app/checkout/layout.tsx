import PrivateRoute from "@/components/AuthProvider/PrivateRoute";
import ProductListPrice from "@/components/checkout/ProductListPrice";
import React from "react";

const layout = ({ children }: any) => {
  return (
    <PrivateRoute>
      <div className="bg-white min-h-screen max-h-full">
        <div className="grid lg:grid-cols-2 container mx-auto max-w-[1110px] py-5 gap-5 lg:gap-12 px-4">
          <div className=" ">{children}</div>
          {/* product list and Price */}
          <div className=" order-first  lg:order-2 w-full  lg:max-w-[500px]">
            <ProductListPrice></ProductListPrice>
          </div>
          {/* <ProductListPrice /> */}
        </div>
      </div>
    </PrivateRoute>
  );
};

export default layout;
