"use client"

import { store } from "@/redux/features/store";
import { Provider } from "react-redux";

const ReduxProvider = ({ children }: any) => {
    return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
