import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material"; // 正しいインポート

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="fixed" color="primary">
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        {/* サイト名 */}
        <Typography variant="h6" component="div">
          TanakaShoudaiPortfolio
        </Typography>

        {/* ナビゲーションボタン */}
        <div>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/graphic">
            Graphic
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
