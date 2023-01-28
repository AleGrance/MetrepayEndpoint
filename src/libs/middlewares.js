import express from "express";

module.exports = (app) => {
  // Settings
  app.set("port", process.env.PORT || 33000);

  //middlewares
  app.use(express.json());
};
