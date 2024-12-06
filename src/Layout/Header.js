import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Layout.scss"; // SCSSファイルをインポート

const Header = () => {
  return (
    <AppBar position="fixed" className="custom-header">
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
