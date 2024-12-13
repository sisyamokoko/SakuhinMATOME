import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Layout.scss"; // SCSSファイルをインポート

const Header = () => {
  return (
    <AppBar position="fixed" className="custom-header">
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        {/* サイト名 */}
        <Typography
          variant="h6"
          color="inherit"
          component={Link}
          to="/"
          style={{ textDecoration: "none" }} // 下線を非表示にする
        >
          TanakaShoudai Portfolio
        </Typography>

        {/* ナビゲーションボタン */}
        <div>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/graphic">
            Graphic
          </Button>
          <Button color="inherit" component={Link} to="/3dcg">
            3DCG
          </Button>
          <Button color="inherit" component={Link} to="/other">
            Other
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
