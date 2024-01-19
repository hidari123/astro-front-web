/*
 * @Author: hidari123
 * @Date: 2024-01-19 14:08:16
 * @LastEditors: hidari123
 * @LastEditTime: 2024-01-19 14:23:57
 * Copyright (c) 2024 by hidari, All Rights Reserved.
 */
import { PropsWithChildren } from "react";
import LayoutHeader from "./header";

const Layout = ({ children }: PropsWithChildren) => (
  <div>
    <LayoutHeader />
    {children}
  </div>
);

export default Layout;
